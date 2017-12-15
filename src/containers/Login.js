import React, { Component } from 'react';
import { connect } from 'react-redux';

import { form as Form } from '../components/Form';

import { Link } from 'react-router-dom'
import Loader from '../components/Loader'

export class Login extends Component {
        
    render() {
        const { loader } = this.props

        return (
            <div className="mvc_wrap">
                <Form 
                    
                />
                <Link 
                    to="/registration" className='link_to_registration'
                >
                    Registration
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
)(Login);
    