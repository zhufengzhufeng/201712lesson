import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// 1.什么是复合组件 将多个组件进行组合 例如调用了两次conter组件
// 2.解构非常复杂时可以把组件分离开
// 3.复合组件 有父子关系 父的数据传递给子的数据
// Panel组件 Heading Body
class Panel extends Component{
    render(){
        let {header,body} = this.props;
        return (
            <div className="container">
                <div className="panel-default panel">
                    <Header head={header}></Header>
                    <Body b={body}/>
                </div>
            </div>
        )
    }
} // react种需要将属性一层层向下传递 单向数据流
class Body extends Component{
    render(){return (<div className="panel-body">{this.props.b}</div>)}
}
class Header extends Component{
    render(){return (<div className="panel-heading">{this.props.head}</div>)}
}
let data = {header:'我非常帅',body:'长的帅'};
ReactDOM.render(<Panel {...data}/>,window.root);