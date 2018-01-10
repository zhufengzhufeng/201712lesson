class Post extends Component {
  componentDidMount(){
    this.handleClick();
  }
  constructor(){
    super();
    this.state = {postContent:'数据加载中...'}
  }
  handleClick = async()=>{
    this.setState({postContent:'数据加载中...'});
    let result = await getPostData();
    this.setState({postContent:result});
  };
  render () {
    return (
      <div>
        <div className='post-content'>
          {this.state.postContent}
        </div>
        <button onClick={this.handleClick}>刷新</button>
      </div>
    )
  }
}