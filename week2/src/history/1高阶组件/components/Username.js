import React from 'react';
// 存一个数据 数据叫username,需要将值放到输入框内
import local from './Local'
class Username extends React.Component {
  render(){
    return <div>
      <input type="text" value={this.props.username} onChange={()=>{}}/>
    </div>
  }
}
// 告诉local 将username取出来，以属性的方式传递给Username
// mixin混合 我们可以把公共逻辑提取到他的父组件上
export default local('username')(Username)