import React from 'react'
import "./styles.scss"

//Components
import EmailPassword from '../../component/EmailPassword'
import OnMobileMenuTransition from "../../component/Hoc/OnMobileMenuTransition/OnMobileMenuTransition"

const Recovery = () => {
    return (
        <OnMobileMenuTransition>
            <EmailPassword />
        </OnMobileMenuTransition>
    )
}

export default Recovery
