import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { ValidateClient } from './ValidateClient'
import { Validate } from './Validate'
// import { renderField } from './Field'

const renderField = ({ input, placeholder, type, meta: { asyncValidating, touched, error } }) => (
    <div>
        <div className={asyncValidating ? 'async-validating' : ''}>
            <input {...input} type={type} placeholder={placeholder}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

const LoginForm = (props) => {
    const { handleSubmit, submitting } = props

    return (
        <form onSubmit={handleSubmit}>
            <Field name="nickname" type="text" component={renderField} placeholder="nickname"/>
            <Field name="password" type="password" component={renderField} placeholder="password"/>
            <div>
                <button type="submit" disabled={submitting}>Log in</button>
            </div>
        </form>
    )   
}

export default reduxForm({
    form: 'LoginForm',
    ValidateClient,
    Validate,
    asyncBlurFields: [ 'nickname' ]
})(LoginForm)