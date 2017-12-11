import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submitForm } from '../actions/LoginForm';
import LoginForm from "./Forms/LoginForm/index";
import { Provider } from "react-redux";
import { store } from '../index';

class Form extends Component {
    constructor(props) {
        super(props)
    }

    generateID = () =>  new Date().getTime()

    submit = (values) => {
        this.props.dispatch(submitForm(this.generateID(), values.nickname, values.password))
    }

    render() {
        const { noUserWasFound } = this.props
        return(
            <div className="login_form">
                <LoginForm onSubmit={this.submit} />
            </div>
        );
    }
}

export const form = connect(state => ({
    noUserWasFound: state.login.noUserWasFound,
    user: state.login.name,
    password: state.login.password
})
)(Form);