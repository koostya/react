import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from '../components/Form';

import { getItemsForUser } from '../actions/actions';

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

export const registration = connect(
    state => ({
        logged: state.store.logged
    })
)(Registration);
    