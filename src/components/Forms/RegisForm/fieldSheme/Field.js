import React from 'react'

const renderField = ({ input, placeholder, className, type, meta: { asyncValidating, touched, error, warning } }) => (
    <div className={asyncValidating ? 'input_wrap async-validating' : 'input_wrap'}>
        <input {...input} placeholder={placeholder} type={type} className={className}/>
        <span className='ajax-loader'></span>
    </div>
)

export default renderField