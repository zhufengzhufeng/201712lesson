import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; // 属性校验的包
// 1.属性是由外界传递的，外面不能改属性，只有状态是属于组件自己的
// 2.声明方式两种 函数声明(没生命周期 状态 this) 类声明（componentDidMount 渲染完成 componentWillUnmount 组件将要卸载）
class School extends Component{ // this.setState()
    static propTypes = { // 静态属性
        age:PropTypes.string
    };
    static defaultProps = { //校验默认属性
        age:'100'
    };
    constructor(props){ // 在构造函数中拿到属性
        super(props);
    }
    render(){ // 组件长什么样子,render的返回值只能有一个根元素
        return (
            // 通过{}取值不能打印对象 可以转化成字符串打印
            <div>
                {JSON.stringify(this.props)}
            </div>
        )
    }
}
// School.propTypes = {age:PropTypes.string};
// 将虚拟dom转换成真实dom
ReactDOM.render(<School name={'珠峰'} age={8}/>,window.root);