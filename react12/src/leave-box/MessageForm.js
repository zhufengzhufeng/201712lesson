import React from 'react';
export default class MessageForm extends React.Component {
  handleSubmit = (e)=>{
    e.preventDefault(); //阻止表单的提交
    let message = {auth:this.auth.value,content:this.content.value};
    this.props.add(message);// 调用父组件的方法 将值传递到父组件中
  };
  render(){
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="auth" className="control-label">留言人</label>
          <input type="text" id="auth" className="form-control" ref={x=>this.auth = x} required={true}/>
        </div>
        <div className="form-group">
          <label htmlFor="content" className="control-label">内容</label>
          <textarea  id="content" cols="30" rows="10" className="form-control" ref={x=>this.content=x} required={true}></textarea>
        </div>
        <div className="form-group">
          <button className="btn btn-info">留言</button>
        </div>
      </form>
    )
  }
}
