import React from 'react';
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
// PureComponent 比较的是状态的地址 如果是同一个不会更新，所以改状态最好采用 用新的状态覆盖掉老的
export default class MessageBox extends React.PureComponent {
  constructor(){
    super();
    this.state = {messages:[]}
  }
  deleteMessage = (id) =>{ // 根据id进行删除
    let messages = this.state.messages.filter(item=>item.id!=id);
    this.setState({ // 重新设置状态
      messages:messages
    });
    localStorage.setItem('messages',JSON.stringify(messages));
  };
  addMessage =(message)=>{ // message是儿子传递过来的,实现子父传递
    let messageItem = {...message,id:Math.random(),createAt:Date.now()};
    //this.state.messages.push(messageItem); //不会更新,不会改变原有的引用地址
    let messages = [...this.state.messages,messageItem];
    this.setState({
      messages
    }); //放到状态中
    localStorage.setItem('messages',JSON.stringify(messages));
  };
  // 生命周期是同步的 再componentWillMount中setState是同步的
  componentWillMount(){ //取localStorage的值时 取到后放在状态中 再进行render 执行一次，willMount中的setState会和this.state状态合并
     let messages = JSON.parse(localStorage.getItem('messages')) || [];
     this.setState({messages});
  }
  render(){
    console.log('render')
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-danger">
              <div className="panel-heading">
                <h1 className="text-center h3">珠峰留言板</h1>
              </div>
              <div className="panel-body">
                <MessageList  messages={this.state.messages} delete={this.deleteMessage}/>
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
