import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import "./styles.scss"

// Components
import InputField from '../Form/InputField'
import Button from '../Form/Button'

// Redux
import {useDispatch, useSelector} from 'react-redux'
import {resetPassword} from '../../redux/User/user.action'

const mapState = ({user}) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    resetPasswordError: user.resetPasswordError
})

const EmailPassword = () => {
   const {resetPasswordSuccess, resetPasswordError} = useSelector(mapState)
   const dispatch = useDispatch()
   const [handleEmailChange, setHandleEmailChange] = useState("")
   const [error, setError] = useState("")
   let history  = useHistory()

    useEffect(() => {
        if(resetPasswordSuccess) {
            history.push("/account/login")
        }
    }, [resetPasswordSuccess, history])

    useEffect(() => {
        if(resetPasswordError) {
            setError("No account found with that email.")
        }
    }, [resetPasswordError])

       const handleOnSubmit = (e) => {
        e.preventDefault()

        dispatch(resetPassword(handleEmailChange))
       }
       return (
           <div className="EmailPassword">
               <h1 className="EmailPassword-title">Reset your password</h1>
               <h1 className="EmailPassword-sub-title">We will send you an email to reset your password.</h1>
               {error && (
                    <div className="EmailPassword-error__box">
                        <ul className="EmailPassword-error">
                            <h1 className="EmailPassword-error__heading">Please adjust the following:</h1>
                            <li className="EmailPassword-error__list">{error}</li>
                        </ul>
                    </div>
               )}
               <form onSubmit={handleOnSubmit}>
                <InputField 
                    label="Email" 
                    type="email" 
                    name="email" 
                    value={handleEmailChange} onChange={(e) => setHandleEmailChange(e.target.value)}
                />

                <Button type="submit">Submit</Button>
               </form>
               <Link className="EmailPassword-CreateAccount" to="/account/login">Cancel</Link>
           </div>
       )
    
}

export default EmailPassword
