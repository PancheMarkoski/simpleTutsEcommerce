import userTypes from "./user.types";

export const emailSignInStart = (email, password) => ({
    type: userTypes.EMAIL_SIGN_IN_START,
    payload: { email, password }
})

export const signInSuccess = user => ({
    type: userTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const checkUserSession = () => ({
    type: userTypes.CHECK_USER_SESSION
})

export const signOutUserStart = () => ({
    type: userTypes.SIGN_OUT_USER_START
})

export const signOutSuccess = () => ({
    type: userTypes.SIGN_OUT_SUCCESS
})

export const signUpUserStart = (email, password, firstName, lastName) => ({
    type: userTypes.SIGN_UP_USER_START,
    payload: { email, password, firstName, lastName }
})

export const resetPasswordStart = (email) => ({
    type: userTypes.RESET_PASSWORD_START,
    payload: email
})

export const resetPasswordSuccess = () => ({
    type: userTypes.RESET_PASSWORD_SUCCESS,
    payload: true
})

export const resetPasswordError = (err) => ({
    type: userTypes.RESET_PASSWORD_ERROR,
    payload: err
})

export const resetUserState = () => ({
    type: userTypes.RESET_USER_STATE
})

export const signInGoogleStart = () => ({
    type: userTypes.SIGN_IN_GOOGLE_START
})
