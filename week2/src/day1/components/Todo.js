import React from 'react';
import store from '../store'
export default class Todo extends React.Component {
  constructor(){
    super();
    this.state = {todos:store.getState().todo}
  }
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({todos:store.getState().todo})
    })
  }
  render(){
    return <div>
      <input type="text" onKeyUp={(e)=>{
          store.dispatch({type:'ADDTODO',content:e.target.value})
      }}/>
      {this.state.todos.map((item,index)=>{
        return <li key={index}>{item}</li>
      })}
    </div>
  }
}
