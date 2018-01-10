import React from 'react';
import ReactDOM from 'react-dom';
let lessons = [
    {name:'vue',price:800},
    {name:'react',price:1000},
]; // find map filter reduce
function toLesson(item) {
    return `当前课程是${item.name} 价格是${item.price}`;
}
// null在react中也是一个合法的元素 表示不存在，没有
let ele = (
    <ul>
        {lessons.map((item,index)=>(
            item.price<1000?null:<li key={index}>{toLesson(item)}</li>
        ))}
    </ul>
);
ReactDOM.render(ele,window.root); // 直接取id