import React from 'react';
import {Link} from 'react-router-dom';
export default class Nav extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              珠峰管理系统
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to='/'>首页</Link></li>
            <li><Link to={{pathname:'/profile'}}>个人中心</Link></li>
            <li><Link to={'/user'}>用户</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}
