import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';
import Slider from "./Slider";
import './index.less';
// 再渲染slider时要提供一些必备的参数
// delay 2秒动一次
// speed每隔0.5s动一张
import a from './1.jpg';
import b from './2.jpg';
import c from './3.jpg';
let items = [{src:a},{src:b},{src:c}];
ReactDOM.render(<Slider
  delay={2}
  speed={0.5}
  autoplay={true}
  dots={true}
  arrows={true}
  items={items}
/>,window.root);