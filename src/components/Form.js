import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submitForm } from '../actions/actions';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            password: '',
            emptyName: false,
            emptyPassword: false
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.user,
            password: this.props.password
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

    formSubmitting = () => {
        this.props.dispatch(submitForm(this.generateID(), this.state.name, this.state.password))
    }

    generateID = () =>  new Date().getTime()


    render() {
        const { noUserWasFound } = this.props
        return(
            <div className="login_form">
                <input 
                    className="name_input"
                    onChange={(e) => {this.handlerName(e)}}
                    value={this.state.name}
                    placeholder='name'
                    style={{ border: noUserWasFound ? '1px solid red' : ''}}
                />
                <input 
                    className="password_input"
                    type="password"
                    onChange={(e) => {this.handlerPassword(e)}}
                    value={this.state.password}
                    placeholder='password'
                    style={{ border: noUserWasFound ? '1px solid red' : ''}}
                />
                <div
                    className="form_button"
                    onClick={() => (this.formSubmitting(this.state.name))}
                >
                Log in
                </div>
            </div>
        );
    }
}

export const form = connect(
    state => ({
        noUserWasFound: state.login.noUserWasFound,
        user: state.login.name,
        password: state.login.password
    })
)(Form);