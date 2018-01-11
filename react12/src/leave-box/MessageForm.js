import React from 'react';
export default class MessageForm extends React.Component {
  render(){
    return (
      <form className="form">
        <div className="form-group">
          <label htmlFor="auth" className="control-label">留言人</label>
          <input type="text" id="auth" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="content" className="control-label">内容</label>
          <textarea  id="content" cols="30" rows="10" className="form-control"></textarea>
        </div>
        <div className="form-group">
          <button className="btn btn-info">留言</button>
        </div>
      </form>
    )
  }
}
