import React from 'react';
import {connect} from 'react-redux';
import actions from '../store/action/index'
import TodoItem from "./TodoItem";
class TodoList extends React.Component {
  filterData(){
    let todos = [];
    if(this.props.type === 'all'){
      todos = this.props.todos;
    }else if(this.props.type === 'finish'){
      todos = this.props.todos.filter(item=>item.isSelected);
    }else{
      todos = this.props.todos.filter(item=>!item.isSelected);
    }
    return todos;
  }
  render(){
    return <div>
      <ul className="list-group">
        {this.filterData().map((item,index)=>(
          <TodoItem
            key={index}
            item={item}
            changeSelected={(id)=>{ //父级传递给儿子的方法
                this.props.changeSelected(id); //这里是action中的方法
            }}
            deleteTodo={(id)=>{//父级传递给儿子的方法
                this.props.deleteTodo(id); //这里是action中的方法
            }}
          />
        ))}
      </ul>
    </div>
  }
}
// 一般情况下 组件分为两类 智能组件（聪明组件） 木偶组件(傻的组件) UI组件
export default connect(state=>({...state}),actions)(TodoList);