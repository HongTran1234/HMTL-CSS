import React, { Component } from 'react'
import UserGreeting from './UserGreeting'
import GuestGreeting from './GuestGreeting'
class Greeting extends Component {
    constructor(props) {
        super(props)
        this.state = { InLog: false }
    }
    render() {
        const InLog = this.state.InLog

        if (InLog) {
            return <UserGreeting />
        } else {
            return <GuestGreeting />
        }

    }
}
export default Greeting