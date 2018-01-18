import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';
import Counter from "./Counter";
import store from './store/index'
import {Provider} from 'react-redux'

ReactDOM.render(<Provider store={store}>
  <Counter/>
</Provider>,window.root);