// import React from 'react'
// import { Field, reduxForm } from 'redux-form'

// const validate = values => {
//     const errors = {}

//     if (!values.nickname) {
//       errors.nickname = 'Required'
//     } else if (values.nickname.length > 15) {
//       errors.username = 'Nickname must contain 15 or less characters'
//     }

//     if (!values.password) {
//       errors.password = 'Required'
//     }

//     return errors
// }

// const renderField = ({ input, placeholder, type, meta: { touched, error, warning } }) => (
//     <div>
//         <input {...input} placeholder={placeholder} type={type}/>
//         {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
//     </div>
// )
  
// const SyncValidationForm = (props) => {
//     const { handleSubmit, submitting } = props
//     return (
//       <form onSubmit={handleSubmit}>
//         <Field name="nickname" type="text" component={renderField} placeholder="nickname"/>
//         <Field name="password" type="password" component={renderField} placeholder="password"/>
//         <div>
//           <button type="submit" disabled={submitting}>Submit</button>
//         </div>
//       </form>
//     )
// }

// export default reduxForm({
//     form: 'LoginForm', 
//     validate               
//   })(SyncValidationForm)