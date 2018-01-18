// components 组件
// containers 容器
// 组件 （ui组件 木偶组件）   智能组件

import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';
import App from "./containers/App";
import Home from "./containers/Home";
import Profile from "./containers/Profile";
import User from "./containers/User";
import Detail from "./containers/Detail";
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
// 一般情况下我们在index中配置路由即可
// swtich的作用让Route匹配后就停止匹配下面的内容
// exact确切的 表示只有路径完全相等时才匹配
// redirect重定向
import 'bootstrap/dist/css/bootstrap.css';
import ProtectedRoute from './ProtectedRoute';
ReactDOM.render(<Router>
  <App>
    {/*switch只当路径匹配成功才会调用组件*/}
    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <ProtectedRoute path="/user" component={User}/>
      <Route path="/profile" component={Profile}/>
      {/*user必须有权限才能访问,模拟如果localStorage有login 登录了，没有不让访问去首页，官方文档上的写法不支持异步的*/}

      /*如果匹配不到会走最后一个路径不会更改*/
      {/*<Route component={Home}/>*/}
      {/*进入详情页面需要传入一个id /detail/1 /detail/:id
        this.props.match.params = {id:1}
        必须要有id 但是可以随机
      */}
      <Route path="/detail/:id" component={Detail}/>
      <Redirect to="/"/>
      {/*redirect具有重定向功能*/}
    </Switch>
  </App>
</Router>,window.root);

