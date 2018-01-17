import React from 'react';
import {connect} from 'react-redux';
import actions from '../store/action/index'
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
          <li className="list-group-item" key={index}>
            <input type="checkbox" checked={item.isSelected} onChange={()=>{
              this.props.changeSelected(item.id);
            }}/>
            {item.title}
            <button className="btn btn-xs pull-right" onClick={()=>{
              this.props.deleteTodo(item.id);
            }}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  }
}
export default connect(state=>({...state}),actions)(TodoList);