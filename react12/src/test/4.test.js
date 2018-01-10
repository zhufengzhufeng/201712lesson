// Component 已经可以直接使用

class House extends Component {
    // TODO
    render(){
        return <div className="house">
            <Room/>
            <Bathroom/>
        </div>
    }
}

class Room extends Component {
    // TODO
    render(){
        return <div className="room">
            <Man/>
            <Dog/>
            <Dog/>
        </div>
    }
}

class Bathroom extends Component {
    // TODO
    render(){
        return <div className="bathroom">
        </div>
    }
}

class Man extends Component {
    render(){
        return <div className="man">
        </div>
    }
}

class Dog extends Component {
    // TODO
}
