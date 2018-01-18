import React from 'react';
import Add from "./Add";
import List from "./List";
import {Link,Route} from 'react-router-dom';
export default class User extends React.Component {
  render(){
    return <div>
      <div className="col-md-3">
        {/*二级路由的导航 /user/add*/}
        <nav className="nav nav-staked">
          <li><Link to={'/user/add'}>添加</Link></li>
          <li><Link to={'/user/list'}>列表</Link></li>
        </nav>
      </div>
      <div className="col-md-9">
        {/*二级路由*/}
        <Route path="/user/add" component={Add}/>
        <Route path="/user/list" component={List}/>
      </div>

    </div>
  }
}
