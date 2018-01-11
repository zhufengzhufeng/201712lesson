import React from 'react';
import MessageItem from "./MessageItem";
export default class MessageList extends React.Component {
  render(){
    return (
      <ul className="list-group">
        {/*item(auth content id createAt)*/}
        {this.props.messages.map((item,index)=>(
            <MessageItem key={index} {...item} del={this.props.delete}/>
        ))}
      </ul>
    )
  }
}
