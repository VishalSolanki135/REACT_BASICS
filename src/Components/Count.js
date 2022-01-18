import React, { Component } from 'react'
import withCounter from './withCounter'

export class Count extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
                <button onClick={incrementCount}> {this.props.name} Clicked {count} times</button>
        )
    }
}

export default withCounter(Count)
