import React, { Component } from 'react'
import FancyBorder from './FancyBorder'
class Dialog extends Component {
    render() {
        return (
            <FancyBorder color="red">
                <h1>{this.props.title} Tran</h1>
                <p>{this.props.message}</p>
                {this.props.children}
            </FancyBorder>
        );
    }
}
export default Dialog