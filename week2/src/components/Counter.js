import React from 'react';
import store from '../store';
import * as actions from '../store/action/counter'
export default class Counter extends React.Component {
  constructor(){
    super();
    this.state = {n:store.getState().counter.num}
  }
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({n:store.getState().counter.num});
    })
  }
  render(){
    return <div>
      <button onClick={()=>{
        store.dispatch(actions.add(10));
      }}>+</button>
      {this.state.n}
      <button onClick={()=>{
        store.dispatch(actions.minus(10));
      }}>-</button>
    </div>
  }
}
