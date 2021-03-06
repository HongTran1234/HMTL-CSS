import React, { Component } from 'react'
import Dialog from './Dialog'
class SignUpDialog extends Component {
    constructor(props) {
        super(props)
        this.state = { login: "" }
        this.handleChange = this.handleChange.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
    }
    handleChange(e) {
        this.setState({
            login: e.target.value
        })
    }
    handleSignUp() {
        alert(`Welcome,${this.state.login}!`)
    }
    render() {
        return (
            <Dialog title="Hello Hong"
                message="Honsu" >
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Singn Me Up
                </button>
            </Dialog>
        )
    }
}
export default SignUpDialog
