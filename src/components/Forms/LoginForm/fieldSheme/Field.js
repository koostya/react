import React from 'react'
import { Field, reduxForm } from 'redux-form'

const renderField = ({ input, placeholder, className, type, meta: { asyncValidating, touched, error, warning } }) => (
    <div className={asyncValidating ? 'input_wrap async-validating' : 'input_wrap'}>
        <input {...input} placeholder={placeholder} type={type} className={className}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        <span className='ajax-loader'></span>
    </div>
)

export default renderField