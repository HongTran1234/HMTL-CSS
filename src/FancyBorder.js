import React, { Component } from 'react'
class FancyBorder extends Component {
    render() {
        return (
            <div className={'FancyBorder' + this.props.color}>
                {this.props.children}
            </div>
        );
    }
}
export default FancyBorder