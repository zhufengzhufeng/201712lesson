// components 组件
// containers 容器
// 组件 （ui组件 木偶组件）   智能组件

import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';
import App from "./containers/App";
import Home from "./containers/Home";
import Profile from "./containers/Profile";
import User from "./containers/User";
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
// 一般情况下我们在index中配置路由即可
// swtich的作用让Route匹配后就停止匹配下面的内容
// exact确切的 表示只有路径完全相等时才匹配
// redirect重定向
import 'bootstrap/dist/css/bootstrap.css'
ReactDOM.render(<Router>
  <App>
    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/user" component={User}/>
      /*如果匹配不到会走最后一个路径不会更改*/
      {/*<Route component={Home}/>*/}
      <Redirect to="/"/>
      {/*redirect具有重定向功能*/}
    </Switch>
  </App>
</Router>,window.root);