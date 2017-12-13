import React from 'react'
import { Field, reduxForm } from 'redux-form'

const renderError = ({input, meta, ...props}) => (
    <div className="error">
        {meta.touched && ((meta.error && <span>{meta.error}</span>) || (meta.warning && <span>{meta.warning}</span>))}
    </div>
)

export default renderError