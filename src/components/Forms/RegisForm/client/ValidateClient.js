const validate = values => {
    const errors = {}

    if (!values.nickname) {
        errors.nickname = 'Nickname is required'
    } 

    if (!values.name) {
        errors.name = 'Name is required'
    } 

    if (!values.surname) {
        errors.surname = 'Surname is required'
    } 

    if (!values.phone) {
        errors.phone = 'Phone is required'
    } 

    if (!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 8) {
        errors.password = 'Length of password is less than 8 symbols'
    } else if (!/[^A-Z0-9]/.test(values.password)) {
        errors.password = 'Password must contain A-z & 0-9 symbols'
    }
    return errors
}

export default validate