import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom'

import { form as RegistrationForm } from '../components/RegistrationForm';

export class Registration extends Component {
        
    render() {
        return (
            <div className="mvc_wrap">
                <RegistrationForm />
                <Link 
                    to="/login" className='link_to_registration'
                >
                    Log in
                </Link>
            </div>
        );
    }
}

export default connect(
    state => ({})
)(Registration);
    