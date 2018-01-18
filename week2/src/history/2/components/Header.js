import React from 'react';
import Title from "./Title";
import PropTypes from 'prop-types'
export default class Header extends React.Component {
  static contextTypes = {
    col:PropTypes.string
  }
  render(){
    return <div>
      <Title/>
      <p style={{color:this.context.col}}>爸爸</p>
    </div>
  }
}
