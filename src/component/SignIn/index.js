import React, {useState, useEffect} from 'react'
import "./styles.scss"

// Component
import InputField from '../Form/InputField'
import {Link} from 'react-router-dom'
import Button from '../Form/Button'

// Firebase
import {auth} from '../../firebase/utils'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import {signInUser, signInWithGoogle} from '../../redux/User/user.action'

const mapState = ({user}) => ({
    currentUser: user.currentUser,
    signInSuccess: user.signInSuccess
})

const SignIn = () => {
   const dispatch = useDispatch(); 
   const {currentUser, signInSuccess} = useSelector(mapState) 
   const [handleEmailChange, setHandleEmailChange] = useState("")
   const [handlePasswordChange, setHandlePasswordChange] = useState("")
   const [error, setError] = useState("")

          useEffect(() => {
             if(signInSuccess) {
               setError("")
             }
          }, [signInSuccess])

   if(!currentUser) 
   {       
       const validate = () => {
           // Email validation
           if(!handleEmailChange.includes("@") || handlePasswordChange.length < 6) 
           {
            setError("Incorrect email or password.")
            return false
           }
           return true
       }  

       const handleOnSubmit = async (e) => {
        e.preventDefault()
        const isValid = validate()
        if(isValid) {
            dispatch(signInUser(handleEmailChange, handlePasswordChange))
        }
       }
       return (
           <div className="SignIn">
               <h1 className="SignIn-title">Login</h1>
               {error && (
                    <div className="SignIn-error__box">
                        <ul className="SignIn-error">
                            <h1 className="SignIn-error__heading">Please adjust the following:</h1>
                            <li className="SignIn-error__list">{error}</li>
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
                <InputField 
                    label="Password"
                    type="password" 
                    name="password"
                    value={handlePasswordChange} onChange={(e) => setHandlePasswordChange(e.target.value)}
                />
                <Link className="SignIn-ForgotYourPassword" to="/account/recover">Forgot Your Password?</Link>
                <Button type="submit">Sign in</Button>
               </form>
               <Button onClick={() => dispatch(signInWithGoogle())}>Sign in with google</Button>
               <Link className="SignIn-CreateAccount" to="/account/register">Create account</Link>
           </div>
       )
   } else {
            return(
                <div className="LoginAccount">
                    <div className="LoginAccount-MyAccount">
                        <h1 className="LoginAccount-MyAccount__heading">My Account</h1>
                        <Link className="LoginAccount-MyAccount__link" to="/" onClick={() => auth.signOut()}>Log out</Link>
                    </div>
                    <div className="LoginAccount-desktop">
                        <div className="LoginAccount-OrderHistory">
                            <h2 className="LoginAccount-OrderHistory__heading">Order History</h2>
                            <p className="LoginAccount-OrderHistory__paragraph">You haven't placed any orders yet.</p>
                        </div>
                        <div className="LoginAccount-AccountDetails">
                            <h2 className="LoginAccount-AccountDetails__heading">Account Details</h2>
                            <Button>View Addresses (0)</Button>
                        </div>
                    </div>
                </div>
            )
   }
    
}

export default SignIn;
