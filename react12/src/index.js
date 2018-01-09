import React from 'react';
import ReactDOM,{render} from 'react-dom';
// react有两部分组成，一个叫react包，react-dom，语法都是es6
// import语法要放置到页面最顶部
// ReactDOM中就一个方法比较常用 叫render

// react元素,JSX元素  javascript+xml html也是xml的一种 javascript+html
// jsx html部分和原生html"基本"一样，不是完全一样
// jsx是一个语法糖 最后会通过babel进行转义 React.createElement写法
/*React.createElement(
    "h1",
    { className: "red" },
    "姜，",
    React.createElement(
        "span",
        { id: "handsome" },
        "帅哥"
    )
);*/
// 最终会转化成一个对象"虚拟dom" {type:'h1',props:{className:"red"，children:[姜，{type:'span',props:{id:'handsome',children:'帅哥'}]}}
//1.先将jsx转化成react元素
//2.将react元素变成一个对象
//3.通过render方法渲染出一个对象
console.log(<h1 className="red">姜，<span id="handsome">帅哥</span></h1>);
render(<h1 className="red">姜，<span id="handsome">帅哥</span></h1>,document.getElementById('root'));