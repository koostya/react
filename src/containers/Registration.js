import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom'

import { form as RegistrationForm } from '../components/RegistrationForm'
import Loader from '../components/Loader'

export class Registration extends Component {
        
    render() {
        const { loader } = this.props
        
        return (
            <div className="mvc_wrap">
                <RegistrationForm />
                <Link 
                    to="/login" className='link_to_registration'
                >
                    Log in
                </Link>
                {loader ? 
                    <Loader />
                    :
                    ''
                }
            </div>
        );
    }
}

export default connect(
    state => ({
        loader: state.loader.loader
    })
)(Registration);
    