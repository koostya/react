export const ValidateClient = values => {
    const errors = {}

    if (!values.nickname) {
        errors.nickname = 'Required'
    } 
    
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors
}