import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';
// this.props.children是获取组件中间的内容
// 1.默认不传递是undefined
// 2.传入一个时是对象类型
// 3.传入多个就是数组类型
// 我们可以用React.Children.map去遍历this.props.children
class Dinner extends Component{
  render(){
    return <div>
      {React.Children.map(this.props.children,(item,index)=>(
        <li>{item}</li>
      ))}
    </div>
  }
}
ReactDOM.render(<Dinner>
  <div>汉堡</div><div>汉堡</div><div>汉堡</div>
</Dinner>,window.root);