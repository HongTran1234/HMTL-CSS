import { Component } from 'react';
class LoginF extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            formError: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        let getName = e.target.name
        this.setState({
            [getName]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        let flag = true
        let email = this.state.email
        let password = this.state.password
        let obj = this.state.formError
        if (!email) {
            flag = false
            obj.email = "Vui long nhap email"
        }
        if (!password) {
            flag = false
            obj.password = "Vui long nhap email"

        }
        console.log(obj)
        if (!flag) {
            this.setState({
                formError: obj
            })
        }

    }
    showError() {
        let formError = this.state.formError
        if (Object.keys(formError).length > 0) {
            return Object.keys.map((key, index) => {
                return (
                    <p>{formError[key]}</p>
                )
            })
        }
    }
    render() {
        return (
            <div>
                {this.showError()}
                < form onSubmit={this.handleSubmit} >
                    <input name="email" value={this.state.email} onChange={this.handleChange}>
                    </input><br />
                    <input name="password" value={this.state.password} onChange={this.handleChange}>
                    </input><br />
                    <button type="button">Login</button>
                </form >
            </div>
        );
    }
}


export default LoginF;