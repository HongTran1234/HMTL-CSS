import React, { Component } from 'react'
class Reservation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isGoing: true,
            numberFirst: 1
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <form>
                <label>
                    Is going
                   <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleChange}></input>
                </label><br />
                <label>
                    Number of guests:
                   <input type="number" name="numberFirst" value={this.state.numberFirst} onChange={this.handleChange}>
                    </input>
                </label>
            </form>
        );
    }
}

export default Reservation