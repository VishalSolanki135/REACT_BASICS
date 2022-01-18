import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super()
    
        this.state = {
             count: 0
        }
    }
    
    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {console.log("Callback Value " , this.state.count)});
        // console.log(this.state.count)

        this.setState(prevState => ({
            count: prevState.count+1
        }))
        // react group multiple set state calls into a single one for better performance
        // so instead of passing a object pass a function which plays with the previous values
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        // const {state1, state2} = this.state
        return (
            <div>
                <div> Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
