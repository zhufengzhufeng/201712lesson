class Dog extends Component {
  constructor () {
    super()
    this.state = {isRunning:false,isBarking:false}
  }

  bark () {
    this.setState({isBarking:true})
  }
  run () {
    this.setState({isRunning:true})
  }
  handleClick = () =>{
    this.bark();
    this.run();
    setTimeout(()=>{
      this.setState({isRunning:false,isBarking:false});
    },35)
  }
  render () {
    return (<div onClick={this.handleClick}>DOG</div>)
  }
}