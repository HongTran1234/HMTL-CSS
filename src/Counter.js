import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
        this.updateCounter = this.updateCounter.bind(this)
        console.log("constructor")
    }
    componentDidMount() {
        this.couterInterval = setInterval(this.updateCounter, 1000)
        console.log("componementDidMount")
    }
    updateCounter() {
        this.setState({
            count: this.state.count + 1
        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate: count from ${prevState.count} to ${this.state.count}')
        if (this.state.count == 5) {
            ReactDOM.unmountComponentAtNode(document.getElementById("root"))

        }
    }
    compomentWillUnmount() {
        console.log("compomentWillUnmount")
        clearInterval(this.counterInterval)
    }
    render() {
        console.log('render:count =${this.state.count}')
        return (
            <div style={{ fontSize: '2rem' }}>
                {this.state.count}
            </div>
        );
    }
}
export default Counter
// ReactDOM.render(
//     <Counter />,
//     document.getElementById('container')
// );