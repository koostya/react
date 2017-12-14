import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisForm from './Forms/RegisForm/index'

class RegistrationForm extends Component {

    submit = (values) => {
        this.props.dispatch({type: 'REGISTRATION_W', data: {
            id: this.generateID(),
            nickname: values.nickname,
            name: values.name,
            surname: values.surname,
            phone: values.phone,
            password: values.password
        }})
    }

    generateID = () =>  new Date().getTime()


    render() {
        return(
            <div className="registration_form">
                <RegisForm onSubmit={this.submit} />
            </div>
        );
    }
}

export const form = connect(
    state => ({
        user: localStorage.getItem('user'),
        name: state.registration.name,
        surname: state.registration.surname,
        password: state.registration.password,
        phone: state.registration.phone,
        userAlreadyExist: state.registration.userAlreadyExist
    })
)(RegistrationForm);