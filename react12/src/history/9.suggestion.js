import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import oldJSONP from 'jsonp';
function jsonp(url,opts={}) {
  return new Promise((resolve,reject)=>{
    // url是jsonp请求的路径 opts是请求的属性，第三个参数是成功的回调
    oldJSONP(url,opts,function (err,data) {
      if(err)reject(err);
      resolve(data); //成功调用resolve
    })
  });
}
// async + await await跟的是promise 有await就需要用async来修饰此函数
class Search extends Component {
  constructor(){
    super();
    this.state = {val:'',arr:[],index:-1} //val是输入框的内容 arr是所有数据列表
  }
  handleChange = async (e) =>{
    let wd = e.target.value;
    let {s} = await jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+wd,{param:'cb'});
    this.setState({val:wd,arr:s});
  };
  changeIndex =(e)=>{
    let index = this.state.index;// 默认的索引
    if(e.keyCode===38 || e.keyCode===40){
      if(e.keyCode === 38){
        index--;
      }else{
        index++;
      }
      this.setState({index})
    }
  };
  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <input type="text" className="form-control" value={this.state.val} onChange={this.handleChange} onKeyDown={this.changeIndex}/>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {this.state.arr.map((item,index)=>(
                <li className={(this.state.index === index?'active':'')+" list-group-item"} key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<Search/>, window.root);