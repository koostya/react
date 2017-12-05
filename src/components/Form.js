import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submitForm } from '../actions/actions';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
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

    formSubmitting = () => {
        this.props.dispatch(submitForm(this.generateID(), this.state.name, this.state.password))

        this.setState({
            name: '',
            password: ''
        })
    }

    generateID = () =>  new Date().getTime()


    render() {
        return(
            <div className="login_form">
                <input 
                    className="name_input"
                    onChange={(e) => {this.handlerName(e)}}
                    value={this.state.name}
                />
                <input 
                    className="password_input"
                    type="password"
                    onChange={(e) => {this.handlerPassword(e)}}
                    value={this.state.password}
                />
                <div
                    className="form_button"
                    onClick={() => (this.formSubmitting())}
                >
                Log in
                </div>
            </div>
        );
    }
}

export const form = connect(
    state => ({})
)(Form);