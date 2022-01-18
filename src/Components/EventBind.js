import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello!"
        }
    }
    
    clickHandler() {
        this.setState({
            message: "Good Bye!"
        })
        console.log(this)
    }

    
    render() {
        this.clickHandler = this.clickHandler.bind(this)
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler}>Click!</button> */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click!</button> */}
                {/* <button onClick={() => {this.clickHandler()}}>Click Me!</button> */}
                <button onClick={this.clickHandler}>Click Me!</button>
            </div>
        )
    }
}

export default EventBind
