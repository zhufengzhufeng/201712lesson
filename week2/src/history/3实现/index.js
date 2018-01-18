import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';
import Counter from "./Counter";
import {Provider} from './react-redux'
import store from './store'; // store容器

ReactDOM.render(<Provider store={store}>
  <Counter/>
</Provider>,window.root);