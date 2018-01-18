import React from 'react';
import {connect} from 'react-redux';
// actions是actionCreator组成的对象
import actions from '../store/action/index'
class TodoHeader extends React.Component {
  getUnFinishCount = ()=>{ //过滤数组中没有选中的lenght
    return this.props.todos.filter(item=>!item.isSelected).length
  };
  render(){
    return <div>
      <h3>亲 你有{this.getUnFinishCount()}件事没完成</h3>
      <input type="text" className="form-control" onKeyUp={(e)=>{
        if(e.keyCode === 13){
          this.props.addTodo({id:Math.random(),title:e.target.value,isSelected:false});
        }
      }}/>
    </div>
  }
}
// store.getState(); // {todos:[{title:'xxx'}]}  actions中的addTodo会变成TodoHeader的属性
export default connect(state=>({...state}),actions)(TodoHeader)