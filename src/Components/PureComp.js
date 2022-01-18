import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

// it does the shallow comparison between the prevState and currState and
// between prevProps and currProps

export default PureComp
