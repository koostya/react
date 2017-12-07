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
    
    componentDidMount() {
        this.setState({
            nickname: this.props.user,
            name: this.props.name,
            phone: this.state.phone,
            password: this.state.password,
            surname: this.state.surname
        })
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
    }

    generateID = () =>  new Date().getTime()


    render() {
        const { user, userAlreadyExist } = this.props

        return(
            <div className="registration_form">
                <input 
                    className="name_input"
                    onChange={(e) => {this.handlerNickname(e)}}
                    value={this.state.nickname}
                    placeholder='nickname'
                    style={{ border: userAlreadyExist ? '1px solid red' : ''}}
                />
                <input 
                    className="name_input"
                    onChange={(e) => {this.handlerName(e)}}
                    value={this.state.name}
                    placeholder='name'
                />
                <input 
                    className="name_input"
                    onChange={(e) => {this.handlerSurname(e)}}
                    value={this.state.surname}
                    placeholder='surname'
                />
                <input 
                    className="name_input"
                    onChange={(e) => {this.handlerPhone(e)}}
                    value={this.state.phone}
                    placeholder='phone'
                />
                <input 
                    className="password_input"
                    type="password"
                    onChange={(e) => {this.handlerPassword(e)}}
                    value={this.state.password}
                    placeholder='password'
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
        user: localStorage.getItem('user'),
        name: state.store.name,
        surname: state.store.surname,
        password: state.store.password,
        phone: state.store.phone,
        userAlreadyExist: state.store.userAlreadyExist
    })
)(RegistrationForm);