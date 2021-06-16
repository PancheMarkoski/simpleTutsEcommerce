import React from 'react'
import "./styles.scss"

const FooterLogo = ({imgUrl}) => {
    return (
        <img className="FooterLogo" alt="Footer logo" src={imgUrl}/>
    )
}

export default FooterLogo
