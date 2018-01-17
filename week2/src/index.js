import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.css'
import {Provider} from 'react-redux';
import store from './store';
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
,window.root);