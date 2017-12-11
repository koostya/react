const validate = values => {
    const errors = {}

    if (!values.nickname) {
        errors.nickname = 'Required'
    } 

    if (!values.name) {
        errors.name = 'Required'
    } 

    if (!values.surname) {
        errors.surname = 'Required'
    } 

    if (!values.phone) {
        errors.phone = 'Required'
    } 

    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8) {
        errors.password = 'Length of password is less than 8 symbols'
    } else if (!/[^A-z0-9]/.test(values.password)) {
        errors.password = 'Password must contain A-z & 0-9 symbols'
    }
    return errors
}

export default validate