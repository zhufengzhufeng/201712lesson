import React from 'react';
import Header from "./Header";
import PropTypes from 'prop-types'
// 希望App中定义一个color的状态，希望把状态给title来用
// context上下文，在当前组件下获取其他子组件的上下文

//1.在父级上要定义上下文 ，先要标名上下文的类型
//2.在父级中获取所有后代的上下文
export default class App extends React.Component {
  static childContextTypes = {
    col:PropTypes.string
  };
  getChildContext(){ // 这里返回的结果就是儿子的上下文
    return {col:this.state.color}
  }
  constructor(){
    super();
    this.state = {color:'yellowgreen'}
  }
  render(){
    return <div>
      <Header/>
    </div>
  }
}
