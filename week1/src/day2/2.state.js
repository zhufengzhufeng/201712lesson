import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';

class Counter extends Component{
    constructor(){
        super();
        this.state = {count:0}
    };
    handleClick = ()=>{
        // setState方法会进行合并 setState有两种写法 一种是对象一种是函数
        /*this.setState({count:this.state.count+1});
         this.setState({count:this.state.count+1});*/
        //this.setState((prevState)=>({count:prevState.count+1})); //如果返回的就是一个对象可以用小括号包裹
        //this.setState((prevState)=>({count:prevState.count+1}));
        // 下一个状态是依赖于上一个状态时需要写成函数的方式
        this.setState({count:this.state.count+1},function () {
            this.setState({count:this.state.count+1});
        }); // 这个写法等同于 this.setState((prevState)=>({count:prevState.count+1}));
    };
    render(){
        console.log('render');
        return (
            <p>
                {this.state.count}
                <button onClick={this.handleClick}>+</button>
            </p>
        )
    }
}
ReactDOM.render(<Counter/>,window.root);