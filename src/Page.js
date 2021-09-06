import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Warning from './Warning'
class Page extends Component {
    constructor(props) {
        super(props)
        this.state = { showWa: true }
        this.Chang = this.Chang.bind(this)
    }
    Chang() {
        this.setState({
            showWa: !this.state.showWa
        })
    }
    render() {
        return (
            <div>
                <Warning warn={this.state.showWa} />
                <button onClick={this.Chang}>
                    {this.state.showWa ? 'Hide' : 'Show'}
                </button>


            </div>
        );
    }
}
export default Page