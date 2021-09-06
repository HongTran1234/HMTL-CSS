import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LogoutButton from './LogoutButton'
import Greeting from './Greeting'
import LoginButton from './LoginButton'
class LoginControl extends Component {
    constructor(props) {
        super(props)
        this.state = { InLog: true }
        this.Change = this.Change.bind(this)
    }
    Change() {
        this.setState({
            InLog: !this.state.InLog
        })
    }
    render() {
        const InLog = this.state.InLog
        let demo = ""
        if (InLog) {
            demo = <LoginButton onClick={this.Change} />

        } else {
            demo = <LogoutButton onClick={this.Change} />
        }
        return (
            <div>
                <Greeting InLog={InLog} />,
                {demo}
            </div>
        );
    }
}
export default LoginControl