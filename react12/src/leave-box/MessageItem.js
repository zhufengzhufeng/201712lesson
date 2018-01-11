import React from 'react';
export default class MessageItem extends React.Component {
  render(){
    let {auth,id,createAt,content} = this.props;
    return (
      <li className="list-group-item">
        留言人:{auth} 内容:{content}
        <span className="pull-right">时间:{new Date(createAt).toLocaleString()}</span>
      </li>
    )
  }
}
