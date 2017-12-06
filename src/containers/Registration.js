import React, { Component } from 'react';
import { connect } from 'react-redux';

import { form as RegistrationForm } from '../components/RegistrationForm';

export class Registration extends Component {
        
    render() {
        return (
            <div className="mvc_wrap">
                <RegistrationForm />
            </div>
        );
    }
}

export default connect(
    state => ({})
)(Registration);
    