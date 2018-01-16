import React from 'react';
import {render} from 'react-dom';
// 1.普通属性 和html中的一样
// 2.特殊的属性 class,for
// 3.style必须是一个对象类型
// 4.危险的插入 innerHTML xss攻击 基本上用不到
let str = '<h1>纯标签</h1>';
let styl = {backgroundColor:'red'};
render(<div>
    <li className="aa"></li>
    <li htmlFor="aa" style={styl}></li>
    <li dangerouslySetInnerHTML={{__html:str}}></li>
</div>,window.root);