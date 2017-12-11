import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisForm from './Forms/RegisForm/index'
import { submitFormRegis } from '../actions/RegisForm';

class RegistrationForm extends Component {
    constructor(props) {
        super(props)
    }

    submit = (values) => {
        this.props.dispatch(submitFormRegis(this.generateID(), values.nickname, values.name, values.surname, values.phone, values.password))
    }

    generateID = () =>  new Date().getTime()


    render() {
        const { user, userAlreadyExist } = this.props

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