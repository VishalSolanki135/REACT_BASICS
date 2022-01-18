import React, {Component} from "react";

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: "Welcome Visitor"
        }
    }

    changeState() {
        this.setState({
            message: this.state.message + " Vishal"
        });
    }
    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => {this.changeState()}}>Subscribe</button>
            </div>
        );
    }
}

export default Message