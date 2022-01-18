import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    

    render() {

        // return this.state.isLoggedIn ? <div>Welcome Vishal</div> : <div>Welcome Guest</div>
        return this.state.isLoggedIn && <div>Welcome Vishal</div>

        // if(this.state.isLoggedIn) {
        //     return <div>Welcome Vishal</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }
    }
}

export default UserGreeting
