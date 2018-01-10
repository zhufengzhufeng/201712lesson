import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';

//defaultProps-> constructor
class Counter extends React.Component{ // 他会比较两个状态相等就不会刷新视图 PureComponent是浅比较
  static defaultProps = {
    name:'珠峰培训'
  };
  constructor(props){
    super();
    this.state = {number:0}
    console.log('1.constructor构造函数')
  }
  componentWillMount(){ // 取本地的数据 同步的方式：采用渲染之前获取数据，只渲染一次
    console.log('2.组件将要加载 componentWillMount');
  }
  componentDidMount(){
    console.log('4.组件挂载完成 componentDidMount');
  }
  handleClick=()=>{
    this.setState({number:this.state.number+1});
  };
  // react可以shouldComponentUpdate方法中优化 PureComponent 可以帮我们做这件事
  shouldComponentUpdate(nextProps,nextState){ // 代表的是下一次的属性 和 下一次的状态
    console.log('5.组件是否更新 shouldComponentUpdate');
    return nextState.number%2;
    // return nextState.number!==this.state.number; //如果此函数种返回了false 就不会调用render方法了
  } //不要随便用setState 可能会死循环
  componentWillUpdate(){
    console.log('6.组件将要更新 componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('7.组件完成更新 componentDidUpdate');
  }
  render(){
    console.log('3.render');
    return (
      <div>
        <p>{this.state.number}</p>
        {this.state.number>3?null:<ChildCounter n={this.state.number}/>}
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
class ChildCounter extends Component{
  componentWillUnmount(){
    console.log('组件将要卸载componentWillUnmount')
  }
  componentWillMount(){
    console.log('child componentWillMount')
  }
  render(){
    console.log('child-render')
    return (<div>
      {this.props.n}
    </div>)
  }
  componentDidMount(){
    console.log('child componentDidMount')
  }
  componentWillReceiveProps(newProps){ // 第一次不会执行，之后属性更新时才会执行
    console.log('child componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps,nextState){
    return nextProps.n%3; //子组件判断接收的属性 是否满足更新条件 为true则更新
  }
}
ReactDOM.render(<Counter name="计数器"/>,window.root);

// defaultProps
// constructor
// componentWillMount
// render
// componentDidMount
// 状态更新会触发的
// shouldComponentUpdate nextProps,nextState=>boolean
// componentWillUpdate
// componentDidUpdate
// 属性更新
// componentWillReceiveProps newProps
// 卸载
// componentWillUnmount
