import React from 'react';
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
export default class MessageBox extends React.Component {
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
                  <MessageList/>
              </div>
              <div className="panel-footer">
                  <MessageForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
