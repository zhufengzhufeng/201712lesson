import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// 1.state变化可以更新视图,更改状态只有一种方式 this.setState({})调用后会更新视图
// 2.声明周期
class Clock extends Component {
    constructor(){
        super();
        this.state = {date:new Date().toLocaleString()}
    }
    componentDidMount(){ //组件渲染完整，当渲染后会自动触发此函数
        setInterval(()=>{
            this.setState({date:new Date().toLocaleString()})
        },1000);
    }
    render(){
        return <h1>{this.state.date}</h1>
    }
}
ReactDOM.render(<Clock/>,window.root);
