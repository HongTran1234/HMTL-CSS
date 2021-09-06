import { Component } from 'react';
class DemoLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            errorForm: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        let Name = e.target.name
        this.setState({
            [Name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        let flag = true
        let email = this.state.email
        let password = this.state.password
        let Sub = {}

        if (!email) {
            flag = false
            Sub.email = "Vui lòng nhập email "
        }
        if (!password) {
            flag = false
            Sub.password = "Vui lòng nhập password"
        }
        if (!flag) {
            this.setState({
                errorForm: Sub
            })
        }
    }
    renderError() {
        let errorForm = this.state.errorForm
        if (Object.keys(errorForm).length > 0) {
            return Object.keys(errorForm).map((key, index) => {
                return (
                    <p>{errorForm[key]}</p>
                )
            })
        }
    }
    render() {
        return (
            <div className="container">
                {this.renderError()}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}></input>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}



export default DemoLogin;