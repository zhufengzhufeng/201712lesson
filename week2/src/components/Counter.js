import React from 'react';
import store from '../store'
export default class Counter extends React.Component {
  render(){
    return <div>
      {store.getState().counter.num}
    </div>
  }
}
