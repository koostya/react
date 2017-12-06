import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submitFormRegis } from '../actions/actions';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            nickname: '',
            surname: '',
            phone: '',
            password: ''
        };
    }

    handlerName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handlerPassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handlerPhone = (e) => {
        this.setState({
            phone: e.target.value
        });
    }

    handlerSurname = (e) => {
        this.setState({
            surname: e.target.value
        });
    }

    handlerNickname = (e) => {
        this.setState({
            nickname: e.target.value
        });
    }

    formSubmitting = () => {
        this.props.dispatch(submitFormRegis(this.generateID(), this.state.nickname, this.state.name, this.state.surname, this.state.phone, this.state.password))

        this.setState({
            name: '',
            nickname: '',
            surname: '',
            phone: '',
            password: ''
        })
    }

    generateID = () =>  new Date().getTime()


    render() {
        const { user } = this.props

        return(
            <div className="registration_form">
                <input 
                    className="name_input"
                    onChange={(e) => {this.handlerNickname(e)}}
                    value={this.state.nickname}
                    placeholder='NICKNAME'
                    border={user === '' ? '1px solid red' : ''}
                />
                <input 
                    className="name_input"
                    onChange={(e) => {this.handlerName(e)}}
                    value={this.state.name}
                    placeholder='NAME'
                />
                <input 
                    className="name_input"
                    onChange={(e) => {this.handlerSurname(e)}}
                    value={this.state.surname}
                    placeholder='SURNAME'
                />
                <input 
                    className="name_input"
                    onChange={(e) => {this.handlerPhone(e)}}
                    value={this.state.phone}
                    placeholder='PHONE'
                />
                <input 
                    className="password_input"
                    type="password"
                    onChange={(e) => {this.handlerPassword(e)}}
                    value={this.state.password}
                    placeholder='***'
                />
                <div
                    className="form_button"
                    onClick={() => (this.formSubmitting())}
                >
                    Registration
                </div>
            </div>
        );
    }
}

export const form = connect(
    state => ({
        user: localStorage.getItem('user')
    })
)(RegistrationForm);