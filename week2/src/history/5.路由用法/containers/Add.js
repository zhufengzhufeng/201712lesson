import React from 'react';
export default class Add extends React.Component {
  handleClick =()=>{
    // 获取localStorage中存储的内容
    let userList = JSON.parse(localStorage.getItem('users'))||[];
    userList.push({id:Math.random(),username:this.x.value});
    localStorage.setItem('users',JSON.stringify(userList));
    // 所有通过路由渲染的组件属性会多三个属性 history,match,location
    this.props.history.push('/user/list'); // push可以跳转路径
  };
  render(){
    return <div>
      <input type="text"
             className="form-control"
             ref={(x)=>this.x=x}/>
      <button onClick={this.handleClick}>添加用户</button>
    </div>
  }
}
