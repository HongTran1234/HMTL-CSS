import React, { Component } from 'react'
import ReactDOM from 'react-dom';
class Warning extends Component {
    render() {
        if (!this.props.warn) {
            return null
        }
        return (
            <p>Warning</p>
        );
    }
}
export default Warning