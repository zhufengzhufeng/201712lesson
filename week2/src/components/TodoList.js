import React from 'react';
import {connect} from 'react-redux';
import actions from '../store/action/index'
class TodoList extends React.Component {
  render(){
    return <div>
      <ul className="list-group">
        {this.props.todos.map((item,index)=>(
          <li className="list-group-item" key={index}>
            <input type="checkbox" checked={item.isSelected} onChange={()=>{
              this.props.changeSelected(item.id);
            }}/>
            {item.title}
            <button className="btn btn-xs pull-right">&times;</button>
          </li>
        ))}
      </ul>
    </div>
  }
}
export default connect(state=>({...state}),actions)(TodoList);