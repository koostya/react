import React, { Component } from 'react';
import { connect } from 'react-redux';

import { form as Form } from '../components/Form';

export class Registration extends Component {
        
    render() {
        return (
            <div className="mvc_wrap">
                <Form 
                    
                />
            </div>
        );
    }
}

export default connect(
    state => ({
        logged: state.store.logged
    })
)(Registration);
    