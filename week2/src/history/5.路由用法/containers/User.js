import React from 'react';
import Add from "./Add";
import List from "./List";
import {Link,Route,NavLink} from 'react-router-dom';
export default class User extends React.Component {
  render(){
    return <div>
      <div className="col-md-3">
        {/*二级路由的导航 /user/add*/}
        <nav className="nav nav-staked">
          <li><NavLink to={'/user/add'}>添加</NavLink></li>
          <li><NavLink to={'/user/list'}>列表</NavLink></li>
        </nav>
      </div>
      <div className="col-md-9">
        {/*二级路由 当只访问user时显示add组件 */}
        <Route path="/user" exact={true} component={Add}/>
        <Route path="/user/add" component={Add}/>
        <Route path="/user/list" component={List}/>
      </div>

    </div>
  }
}
