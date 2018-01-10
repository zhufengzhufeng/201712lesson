import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// 1.父传子 通过属性
// 2.子传父 通过父亲传递给儿子一个函数，儿子调用父亲的函数将值传递给父亲,父亲更新值，刷新视图
class Panel extends Component{
    constructor(){
        super();
        this.state = {color:'primary'}
    }
    changeColor=(color)=>{ //到时候儿子传递一个颜色
        this.setState({color});
    };
    render(){
        return (
            <div className="container">
                <div className={"panel-"+this.state.color+" panel"}>
                    <Header head={this.props.header}
                            change={this.changeColor}
                    ></Header>
                </div>
            </div>
        )
    }
}
class Header extends Component{
    handleClick = ()=>{
        this.props.change('danger');
    }
    render(){return (
        <div className="panel-heading">
            {this.props.head} <button className="btn btn-danger" onClick={this.handleClick}>改颜色</button>
            </div>)}
}
let data = {header:'我非常帅'};
ReactDOM.render(<Panel {...data}/>,window.root);