import React, { Component } from 'react'
class FlavorForm extends Component {
    constructor(props) {
        super(props)
        this.state = { value: "" }
        this.changeOption = this.changeOption.bind(this)
        this.changeSubmit = this.changeSubmit.bind(this)
    }
    changeOption(event) {
        this.setState({ value: event.target.value })
    }
    changeSubmit() {
        alert("Ten toi la" + " " + this.state.value)
    }
    render() {
        return (
            <form onSubmit={this.changeSubmit}>
                <lable>
                    Name
                    <select value={this.state.value} onChange={this.changeOption}>
                        <option value="tran">Tran</option>
                        <option value="thi">Thi</option>
                        <option value="hong">Hong</option>
                        <option value="honsu">Honsu</option>
                    </select>
                </lable>
                <input type="submit" value="Submit"></input>
            </form>
        );
    }
}
export default FlavorForm
