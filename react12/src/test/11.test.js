class Post extends Component {
  render () {
    return (<p onClick={(e)=>{
      console.log(e.target.offsetHeight)
    }}>{this.props.content}</p>)
  }
}