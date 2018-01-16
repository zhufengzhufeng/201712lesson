// 受控组件 非受控组件 （受状态控制）
import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';
//1.受状态控制的组件，必须要有onChange方法，否则不能使用
//2.受控组件可以赋予默认值（官方推荐使用 受控组件）
class Input extends Component{
    constructor(){
        super();
        this.state = {val:'100'}
    }
    handleChange = (e) =>{ //e是事件源
        let val = e.target.value;
        this.setState({val});
    };
    render(){
        return (<div>
            <input type="text" value={this.state.val} onChange={this.handleChange}/>
            {this.state.val}
        </div>)
    }
}

ReactDOM.render(<Input/>,window.root);