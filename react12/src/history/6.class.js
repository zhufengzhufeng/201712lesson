import React,{Component} from 'react';
import {render} from 'react-dom';
let school1 = {name:'珠峰',age:8};
let school2 = {name:'珠峰',age:0};
//1.类声明的组件有this this上有props属性
class Build extends Component{
    render(){ // 这个组件在调用时默认会调用render方法
        let {name,age} = this.props;
        return <p>{name} {age}</p>
        // return  <p>{this.props.name} {this.props.age}</p>
    }
}
render(<div>
    <Build name={school1.name} age={school1.age}/>
    <Build {...school2} />
</div>,window.root);

