import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';

class Counter extends Component{
    constructor(){
        super();
        this.state = {count:{number:1}}
    };
    handleClick = ()=>{
        this.setState({
            count:{number:this.state.count.number+1}
        });
    };
    render(){
        return (
            <p>
                {this.state.count.number}
                <button onClick={this.handleClick}>+</button>
            </p>
        )
    }
}
ReactDOM.render(<Counter/>,window.root);