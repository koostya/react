import React from 'react'

const renderError = ({input, meta, ...props}) => (
    <div className="error">
        {meta.touched && ((meta.error && <span>{meta.error}</span>) || (meta.warning && <span>{meta.warning}</span>))}
    </div>
)

export default renderError