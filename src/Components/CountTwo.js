import React, { Component } from 'react'

class CountTwo extends Component {
    render() {
        const {count, incrementCount} = this.props;
        return <button onClick={incrementCount}>Clicked {count} times</button>
    }
}

export default CountTwo
