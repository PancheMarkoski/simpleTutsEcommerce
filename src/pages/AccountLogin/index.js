import React from 'react'
import './styles.scss'

// Components
import SignIn from '../../component/SignIn'
import OnMobileMenuTransition from '../../component/Hoc/OnMobileMenuTransition/OnMobileMenuTransition'

const AccountLogin = () => {
    return (
        <OnMobileMenuTransition>
            <SignIn/>
        </OnMobileMenuTransition>
    )
}

export default AccountLogin
