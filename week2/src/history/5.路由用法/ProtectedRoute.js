import React from 'react';
import {withRouter} from 'react-router-dom';
class ProtectedRoute extends React.Component {
  componentWillMount(){
      let flag = localStorage.getItem('LOGIN');
      if(!flag){ //没登录
         this.props.history.push('/'); //没登录去首页
      }
  }
  render(){
    let {path,component:Component} = this.props;
    return <Component/>
  }
}
export default withRouter(ProtectedRoute);
