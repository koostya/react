import React from 'react'
import { Field, reduxForm } from 'redux-form'

export const renderField = ({ input, placeholder, type, meta: { asyncValidating, touched, error } }) => (
    <div>
        <div className={asyncValidating ? 'async-validating' : ''}>
            <input {...input} type={type} placeholder={placeholder}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)