import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './client/ValidateClient'
import asyncValidate from './server/Validate'
import renderField from './fieldSheme/Field'
import renderError from './error/index'
  
const RegisForm = (props) => {
    const { handleSubmit, submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <div className="errors">
            <Field name="nickname" component={renderError} />
            <Field name="name" component={renderError} />
            <Field name="surname" component={renderError} />
            <Field name="phone" component={renderError} />
            <Field name="password" component={renderError} />
        </div>
        <Field name="nickname" type="text" component={renderField} placeholder="nickname" className='name_input' />
        <Field name="name" type="text" component={renderField} placeholder="name" className='name_input'/>
        <Field name="surname" type="text" component={renderField} placeholder="surname" className='name_input'/>
        <Field name="phone" type="text" component={renderField} placeholder="phone" className='name_input'/>
        <Field name="password" type="password" component={renderField} placeholder="password" className='password_input'/>
        <div>
          <button type="submit" className='form_button' disabled={submitting}>Registration</button>
        </div>
      </form>
    )
}

export default reduxForm({
    form: 'RegisForm', 
    validate,
    asyncValidate,
    asyncBlurFields: ['nickname']
})(RegisForm)