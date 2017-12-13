import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './client/ValidateClient'
import asyncValidate from './server/Validate'
import renderField from './fieldSheme/Field'
  
const SyncValidationForm = (props) => {
    const { handleSubmit, submitting, pristine, error } = props
    return (
      <form onSubmit={handleSubmit}>
        <Field name="nickname" type="text" component={renderField} placeholder="nickname" className='name_input' />
        <Field name="password" type="password" component={renderField} placeholder="password" className='password_input'/>
        <div>
          <button type="submit" className='form_button' disabled={submitting}>Log in</button>
        </div>
      </form>
    )
}

export default reduxForm({
    form: 'LoginForm', 
    validate,
    asyncValidate,
    asyncBlurFields: ['nickname', 'password']
  })(SyncValidationForm)