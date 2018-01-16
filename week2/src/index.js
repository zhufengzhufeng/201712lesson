import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';
import Counter from "./components/Counter";
import Compute from "./components/Compute";


ReactDOM.render(<div>
  <Counter/>
  <Compute/>
</div>,window.root);