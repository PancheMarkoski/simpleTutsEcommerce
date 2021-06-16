const validation = (values) => {
    let errors = {}

    if(!values.firstName) {
        errors.firstName = "First name can't be blank"
    }

    if(!values.lastName) {
        errors.lastName = "Last name can't be blank"
    }
    if(!values.email) {
        errors.email = "Email name can't be blank"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid."
    }
    if(!values.password) {
        errors.password = "Password name can't be blank"
    } else if (values.password.length < 5) {
        errors.password = "Password is too short (minimum is 5 characters)"
    }
    return errors
}

export default validation
