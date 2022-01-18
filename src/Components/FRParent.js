import React, { Component } from 'react'
import Input from './FRInput'

class FRParent extends Component {

    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }
    
    clickHandler = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <Input ref={this.inputRef}></Input>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default FRParent
