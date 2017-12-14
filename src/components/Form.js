import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from "./Forms/LoginForm/index";

class Form extends Component {

    generateID = () =>  new Date().getTime()

    submit = (values) => {
        this.props.dispatch({type: 'SUBMIT_FORM_W', data: {
            id: this.generateID(),
            nickname: values.nickname,
            password: values.password
        }})
    }

    render() {
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
    password: state.login.password,
    users: state.item.users
})
)(Form);