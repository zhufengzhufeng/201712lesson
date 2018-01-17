import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';
import Counter from "./components/Counter";
import Todo from "./components/Todo";


ReactDOM.render(<div>
  <Counter/>
  <Todo/>
</div>,window.root);