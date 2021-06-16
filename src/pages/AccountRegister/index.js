import React from 'react'
import "./styles.scss"

// Components
import SignUp from '../../component/SignUp'
import SignUpFromSuccess from "../../component/SignUpFormSuccess"
import OnMobileMenuTransition from "../../component/Hoc/OnMobileMenuTransition/OnMobileMenuTransition"

// Redux
import { useSelector} from 'react-redux'

const mapState = ({user}) => ({
    currentUser: user.currentUser
})

const AccountRegister = () => {
    const {currentUser} = useSelector(mapState)
    return (
        <React.Fragment>
            <OnMobileMenuTransition>
                {!currentUser ? <SignUp /> : <SignUpFromSuccess />}
            </OnMobileMenuTransition>
        </React.Fragment>
    )
}


export default AccountRegister
