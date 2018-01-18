import React from 'react';
import {connect} from './react-redux'
class Counter extends React.Component {
  render(){
    return <div>
      {this.props.n}
      <button onClick={()=>{
          this.props.add(1)
      }}>+</button>
      </div>
  }
}
let mapStateToProps = (state)=>{
  return {n:state.number}
};
let mapDispatchToProps = (dispatch)=>{
  return {
    add:(count)=>{
      dispatch({type:'ADD',count})
    }
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter)