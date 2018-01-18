import React from 'react';
import Nav from "../components/Nav";
export default class App extends React.Component {
  render(){
    return <div>
      <Nav/>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {this.props.children}
          </div>
        </div>
      </div>
    </div>
  }
}
