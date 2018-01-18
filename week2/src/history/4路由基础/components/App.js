import React from 'react';
// HashRouter 和BrowserRouter 是路由的容器 是组件 包在路由的外面
// Route是一条条的路由
import {HashRouter as Router,Route} from 'react-router-dom';
function Home() {
  return <h1>首页</h1>
}
function Profile() {
  return <h1>个人中心</h1>
}
function User() {
  return <h1>用户</h1>
}
export default class App extends React.Component {
  render(){
    return <Router>
      <div>
        {/*当路径匹配时 会渲染对应的组件 路由是从上到下匹配的，/p  /p/1是可以匹配到的*/}
        <Route path="/" exact={true} component={Home}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/user" component={User}/>
      </div>
    </Router>
  }
}
