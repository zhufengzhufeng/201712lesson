import React from 'react';
export default class Detail extends React.Component {
  render(){
    let user = this.props.location.state; //上一个页面带过来的内容
    if(user==null){ // 如果没有拿到id去localStorage取值
      let id = this.props.match.params.id;
      let users = JSON.parse(localStorage.getItem('users'))||[];
      user = users.find(item=>item.id==id) || {};
    }
    return <div>
     id： {user.id} 用户名: {user.username}
    </div>
  }
}
