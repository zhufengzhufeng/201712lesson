import React from 'react';
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
// PureComponent 比较的是状态的地址 如果是同一个不会更新，所以改状态最好采用 用新的状态覆盖掉老的
export default class MessageBox extends React.PureComponent {
  constructor(){
    super();
    this.state = {messages:[{id:1,content:'今天吃药了吗？',auth:'珠峰培训',createAt:Date.now()}]}
  }
  addMessage =(message)=>{ // message是儿子传递过来的,实现子父传递
    let messageItem = {...message,id:Math.random(),createAt:Date.now()};
    //this.state.messages.push(messageItem); //不会更新,不会改变原有的引用地址
    let messages = [...this.state.messages,messageItem];
    this.setState({
      messages
    }); //放到状态中
  };
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-danger">
              <div className="panel-heading">
                <h1 className="text-center h3">珠峰留言板</h1>
              </div>
              <div className="panel-body">
                <MessageList  messages={this.state.messages}/>
              </div>
              <div className="panel-footer">
                <MessageForm add={this.addMessage}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
