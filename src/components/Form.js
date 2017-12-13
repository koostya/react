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
        // this.props.dispatch(submitForm(this.generateID(), values.nickname, values.password))
        this.props.dispatch({type: 'SUBMIT_FORM_W', data: {
            id: this.generateID(),
            nickname: values.nickname,
            password: values.password
        }})
    }

    render() {
        const { noUserWasFound, users, dispatch } = this.props
        return(
            <div className="login_form">
                <LoginForm onSubmit={this.submit} />
                <ul>
                    {users.map((user, i) => 
                        <li key={i}>{user.nickname}</li>
                    )}
                </ul>
                <button onClick={() => (dispatch({type: 'GET_USERS'}))}>Get Users</button>
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