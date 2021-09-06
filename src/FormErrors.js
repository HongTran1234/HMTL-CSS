import React, { Component } from 'react'
const pStyle = {
    color: 'red'
}
class FormErrors extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let formErrors = this.props.formErrors
        return (

            Object.keys(formErrors).map((key, index) => {
                if (Object.keys(formErrors).length > 0) {
                    return (
                        <p>{formErrors[key]}</p>
                    )
                }
            })

        );
    }
}

export default FormErrors