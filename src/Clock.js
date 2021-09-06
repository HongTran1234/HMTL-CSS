
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Hello</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
export default Clock
// ReactDOM.render(
//     <State />,
//     document.getElementById('root')
// );