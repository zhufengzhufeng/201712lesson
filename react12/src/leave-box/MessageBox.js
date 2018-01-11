import React from 'react';
export default class MessageBox extends React.Component {
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-danger">
              <div className="panel-heading">
                <h1 className="text-center">珠峰留言板</h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  <li className="list-group-item">
                      留言人:珠峰培训 内容:明天放假 时间:xxxx
                  </li>
                </ul>
              </div>
              <div className="panel-footer">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
