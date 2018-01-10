import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';

class Lesson extends Component {
  render(){
    return (
      <div onClick={()=>{
        console.log(`${this.props.index} - ${this.props.lesson.title}`)
      }}>
        <h1>{this.props.lesson.title}</h1>
        <p>{this.props.lesson.description}</p>
      </div>
    )
  }
}
// key不会传递给子组件
class LessonsList extends Component {
  render(){
    return (
     <div>
       {this.props.lessons.map((item,index)=>(
          <Lesson lesson={item} key={index} index={index}/>
       ))}
     </div>
    )
  }
}