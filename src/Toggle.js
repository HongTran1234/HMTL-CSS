import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = { a: true }
        this.b = this.b.bind(this)
    }
    b() {
        this.setState(state => ({
            a: !state.a
        }))
    }
    render() {
        return (
            <div onClick={this.b}>

                {this.state.a ? 'ON' : 'OFF'}
            </div>
        );
    }
}
export default Toggle