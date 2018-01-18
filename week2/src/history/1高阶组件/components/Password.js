import React from 'react';
// 存一个数据 数据叫username,需要将值放到输入框内
import local from './Local'
class Password extends React.Component {
  render(){
    return <div>
      <input type="text" value={this.props.password} onChange={()=>{}}/>
    </div>
  }
}
export default local('password')(Password)