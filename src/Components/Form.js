import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comment: '',
             topic: 'react'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text"
                           value={this.state.username} onChange={this.handleUsernameChange}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea type="text" 
                              value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                </div>
                <div>
                    <label>Options</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option>React</option>
                        <option>Angular</option>
                        <option>View</option>
                    </select>
                </div>
                <button type="Submit">Submit</button>
            </form>
        )
    }
}

export default Form
