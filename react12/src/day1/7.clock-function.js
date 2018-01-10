import React from 'react';
import ReactDOM from 'react-dom';
// jsx元素具有不变性 只渲染一次
function Clock(props) {
    return <h1>{props.date}</h1>
}
//render方法会被优化 只会重新渲染改变的地方 domDiff 性能较好
setInterval(()=>{
    ReactDOM.render(<Clock date={new Date().toLocaleString()}/>,window.root);
},1000);
