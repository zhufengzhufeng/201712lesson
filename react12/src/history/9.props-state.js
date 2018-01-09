import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// 名字，年龄  年龄应该是1
//yarn add prop-types用来校验属性的
class School extends React.Component{ // 类上的属性就叫静态属性
    static propTypes = { // 校验属性的类型和是否必填
        age:PropTypes.number.isRequired, // 支持的类型可以参考prop-types的readme文件
    };
    static defaultProps = { // 先默认调用defaultProps
        name:'珠峰',
        age:1
    }; // 默认属性
    constructor(props){ //如果想在构造函数中拿到属性需要通过参数的方式
         //不能在组件中更改属性 不能修改属性*
        super();
    }
    render(){
        return <h1>{this.props.name} {this.props.age}</h1>
    }
}
ReactDOM.render(<School name="珠峰培训" age={9}/>,window.root);


// 组件的数据来源有两个地方
// props 外界传递过来的 默认属性，属性校验
// state 状态是自己的 属性和状态变化都会影响视图更新