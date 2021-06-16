import userTypes from "./user.types";
import {auth, handleUserProfile, GoogleProvider} from '../../firebase/utils'

export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
});

export const signInUser = (email, password) => async dispatch => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
        dispatch({
            type: userTypes.SIGN_IN_SUCCESS,
            payload: true
        })
    } catch (error) {
        // console.log(error)
    }
}

export const signUpUser = (email, password, firstname, lastname) => async dispatch => {
    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password)
        dispatch({
            type: userTypes.SIGN_UP_SUCCESS,
            payload: true
        })
        let firstName = firstname
        let lastName = lastname
        await handleUserProfile(user, {firstName, lastName})  
                    
    } catch (error) {
                    
    }
}

export const resetPassword = (handleEmailChange) => async dispatch => {
    try {
        const config = {
            url: 'http://localhost:3000/account/login'
        }
            await auth.sendPasswordResetEmail(handleEmailChange,config)
                .then(() => {
                    dispatch({
                        type: userTypes.RESET_PASSWORD_SUCCESS,
                        payload: true
                    })
                })
                .catch(() => {
                     dispatch({
                        type: userTypes.RESET_PASSWORD_ERROR,
                        payload: true
                    })
                })
        } catch (error) {
            // console.log(error)
        }    
}

export const signInWithGoogle = () => async dispatch => {
    try {
        await auth.signInWithPopup(GoogleProvider)
        .then(() => {
            dispatch({
                type: userTypes.SIGN_IN_SUCCESS,
                payload: true
            })
        })
    } catch (error) {
        
    }
}

