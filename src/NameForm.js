import React, { Component } from 'react'
class NameForm extends Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }
        this.Change = this.Change.bind(this)
        this.changeSubmit = this.changeSubmit.bind(this)
    }
    Change(event) {
        this.setState({ value: event.target.value })
    }
    changeSubmit() {
        alert('A name submited' + " " + this.state.value)
    }
    render() {
        return (
            <form onSubmit={this.changeSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.Change}>
                    </input>
                </label>
                <input type="submit" name="submit"></input>
            </form>
        );
    }
}


export default NameForm