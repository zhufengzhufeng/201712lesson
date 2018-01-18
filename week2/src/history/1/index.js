// 高阶组件(一个组件返回一个组件) 高阶函数(多余一个箭头的叫高阶函数)

import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';
import Username from "./components/Username";
import Password from "./components/Password";
ReactDOM.render(<div>
  <Username/>
  <Password/>
</div>,window.root);


