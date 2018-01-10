import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';
class Input extends Component {
  render () {
    return (
      <div>
        <input type='number' onChange={(e)=>{
            this.props.change(e.target.value)
        }}/>
      </div>
    )
  }
}
class PercentageShower extends Component {
  render () {
    return (
      <div>{(this.props.n*100).toFixed(2)+'%'}</div>
    )
  }
}
// 平级交互 通过共同的父级
class PercentageApp extends Component {
  constructor(){
    super();
    this.state = {number:''}
  }
  handleChange = (val) =>{
    this.setState({
      number:val
    })
  };
  render () {
    return (
      <div>
        <Input change={this.handleChange}/>
        <PercentageShower n={this.state.number}/>
      </div>
    )
  }
}
