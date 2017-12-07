import React, { Component } from 'react';
import { connect } from 'react-redux';

import { form as Form } from '../components/Form';

import { Link } from 'react-router-dom'

export class Login extends Component {
        
    render() {
        return (
            <div className="mvc_wrap">
                <Form 
                    
                />
                <Link 
                    to="/registration" className='link_to_registration'
                >
                    Registration
                </Link>
            </div>
        );
    }
}

export default connect(
    state => ({})
)(Login);
    