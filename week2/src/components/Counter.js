import React from 'react';
// import store from '../store';
import * as actions from '../store/action/counter';
import {connect} from 'react-redux';
// 利用react-redux需要导出一个连接后的组件
class Counter extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {n:store.getState().counter.num}
  // }
  // componentDidMount(){
  //   store.subscribe(()=>{
  //     this.setState({n:store.getState().counter.num});
  //   })
  // }
  render(){
    return <div>
      <button onClick={()=>{
        //store.dispatch(actions.add(10));
        this.props.add(1)
      }}>+</button>
      <p>{this.props.n1}</p>
      <button onClick={()=>{
        //store.dispatch(actions.minus(10));
        this.props.minus(2)
      }}>-</button>
    </div>
  }
}
// connect执行时有两个"函数" mapStateToProps
// 1.将redux中的状态映射成属性
// 2.mapDispatchToProps 将dispatch方法映射成属性
// 3.这个两个组件的返回值会作为当前组件的属性
let mapStateToProps = (state) =>{ //这个函数的参数是state   state= store.getState()
  return {n1:state.counter.num}
};
let mapDispatchToProps = (dispatch) =>{ // 这个函数的参数是dispatch dispatch = store.dispatch
  return {
    add:(count)=>{
      dispatch(actions.add(count));
    },
    minus:(count)=>{
      dispatch(actions.minus(count));
    }
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);//第二次执行的参数是当前组件
