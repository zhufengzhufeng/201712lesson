class Computer extends Component {
  constructor(){
    super();
    this.state = {status:'off'}
  }
  turn = () =>{
    this.setState({
      status:this.state.status==='off'?'on':'off'
    })
  };
  render () {
    return (
      <div>
        <button onClick={this.turn}>开关</button>
        <Screen n={this.state.status==='off'?'显示器关了':'显示器亮了'}/>
      </div>
    )
  }
}

class Screen extends Component {
  static defaultProps = {
    showContent:'无内容'
  }
  render () {
    return (
      <div className='screen'>{this.props.n}</div>
    )
  }
}
