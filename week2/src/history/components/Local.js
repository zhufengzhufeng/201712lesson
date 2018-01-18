import React from 'react';
let local = (key) => (C)=>{
  return class HighOrderComponent extends React.Component{
      constructor(){
        super();
        this.state = {[key]:''}
      }
      componentWillMount(){
        let val = localStorage.getItem(key);
        this.setState({[key]:val})
      }
      render(){
        return <C {...this.state} a="1"/>
      }
  }
};

export default local