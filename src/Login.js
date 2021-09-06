import React, { Component } from 'react'
import FormErrors from './FormErrors'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            email: '',
            formErrors: {}

        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInput(e) {
        const nameInput = e.target.name
        const value = e.target.value
        this.setState({
            [nameInput]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        let flag = true;
        let email = this.state.email
        let password = this.state.password
        let errorSubmit = {}
        if (!email) {
            flag = false;
            errorSubmit.email = "Vui long nhap email";

        }
        if (!password) {
            flag = false;
            errorSubmit.password = "Vui long nhap password";
        }
        if (!flag) {
            this.setState({
                formErrors: errorSubmit
            })
        }
    }
    render() {
        return (

            <div>
                <FormErrors formErrors={this.state.formErrors} />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Email" name="email" onChange={this.handleInput} /><br />

                    <input type="password" placeholder="Password" name="password" onChange={this.handleInput} />

                    <span>
                        <input type="checkbox" className="checkbox" />
                    Keep me aaaaa
                    </span>
                    <br />
                    <button type="submit" className="btn btn-defaut">Login</button>
                </form>
            </div>
        );
    }
}
export default Login