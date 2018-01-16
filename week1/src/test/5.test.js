class Dog extends Component {
    bark () {
        console.log('bark')
    }

    run () {
        console.log('run')
    }
    handleClick=()=>{
        this.bark();
        this.run();
    }
    render () {
        return (<div onClick={this.handleClick}>DOG</div>)
    }
}