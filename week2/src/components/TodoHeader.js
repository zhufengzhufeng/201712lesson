import React from 'react';
export default class TodoHeader extends React.Component {
  render(){
    return <div>
      <h3>亲 你有x件事没完成</h3>
      <input type="text" className="form-control"/>
    </div>
  }
}
