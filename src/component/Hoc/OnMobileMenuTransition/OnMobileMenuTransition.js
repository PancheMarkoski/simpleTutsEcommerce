import React from 'react'
import "./styles.scss"

// Redux
import { connect } from 'react-redux'

const OnMobileMenuTransition = ({children, headerMobileMenu}) => {
    return (
        <div className={headerMobileMenu ? "OnMobileMenuTransitionActive" : "OnMobileMenuTransitionDeactive"}>
            {children}
        </div>
        
    )
}

const mapStateToProps = state => ({
    headerMobileMenu: state.header.mobileMenu
})

export default connect(mapStateToProps)(OnMobileMenuTransition);
