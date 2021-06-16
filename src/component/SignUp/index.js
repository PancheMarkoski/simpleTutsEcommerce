import React, {useState, useEffect} from 'react'
import "./styles.scss"

// Component
import InputField from '../Form/InputField'
import Button from '../Form/Button'
import validation from '../Validation'

// Redux
import {useDispatch} from 'react-redux'
import { signUpUser } from '../../redux/User/user.action'

const SignUp = () => {
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState({})
    const [dataIsCorrect, setDataIsCorrect] = useState(false)
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(validation(values))
        setDataIsCorrect(true)
           
    }

    
    useEffect(() => {
        if(Object.keys(error).length === 0 && dataIsCorrect) {
            dispatch(signUpUser(values.email, values.password, values.firstName, values.lastName))
            // try {
                //     const { user } = await auth.createUserWithEmailAndPassword(values.email, values.password)
                //     let firstName = values.firstName
                //     let lastName = values.lastName
                //     await handleUserProfile(user, {firstName, lastName})  
                
                // } catch (error) {
                    
                    // }
                }

           

            }, [error, dataIsCorrect, values, dispatch, ])

           
       return (
           <div className="SignUp">
               <h1 className="SignUp-title">Create Account</h1>
               {(error.email || error.password || error.firstName || error.lastName) && (
                    <div className="SignUp-error__box">
                        <ul className="SignUp-error">
                            <h1 className="SignUp-error__heading">Please adjust the following:</h1>
                                {error.firstName && <li className="SignUp-error__list">{error.firstName}</li>}
                                {error.lastName && <li className="SignUp-error__list">{error.lastName}</li>}
                                {error.email && <li className="SignUp-error__list">{error.email}</li>}
                                {error.password && <li className="SignUp-error__list">{error.password}</li>}
                        </ul>
                    </div>)}
               
               <form onSubmit={handleSubmit}>
                <InputField 
                    label="First Name" 
                    type="text" 
                    name="firstName" 
                    value={values.firstName} onChange={(e) => handleChange(e)}
                />
                <InputField 
                    label="Last Name" 
                    type="text" 
                    name="lastName" 
                    value={values.lastName} onChange={(e) => handleChange(e)}
                />
                <InputField 
                    label="Email" 
                    type="email" 
                    name="email" 
                    value={values.email} onChange={(e) => handleChange(e)}
                />
                <InputField 
                    label="Password"
                    type="password" 
                    name="password"
                    value={values.password} onChange={(e) => handleChange(e)}
                />
                <Button type="submit">Create</Button>
               </form>
           </div>
       )
}



export default SignUp
