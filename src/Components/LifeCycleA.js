import React, { Component } from 'react'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Vishal'
        }
        console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA GDSFP')
        return null;
    }
    
    componentDidMount() {
        console.log('LifecycleA did mount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA SCU')
        return true
    } // it will tell should component get rendered or not

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA GSBU')
        return null
    } // if component got rendered, it will return the snapshot

    componentDidUpdate() {
        console.log('LifecycleA CDU')
    } // it will tell if component got rendered or not

    changeState = ()=> {
        this.setState({
            name: 'Solanki'
        })
    }

    render() {
        console.log('render')
        return (
            <div>
                LifeCycleA
                <button onClick={this.changeState}>Change state</button>
            </div>
        )
    }
}

export default LifeCycleA
