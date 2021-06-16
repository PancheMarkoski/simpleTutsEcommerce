import React, { Fragment } from 'react'
import "./styles.scss"

const FooterLink = (props) => {
    return (
        <Fragment>
            <div className="FooterLink">
                <p className="FooterLink-title">{props.Title}</p>
                <ul className="FooterLink-list">
                {props.children}
                </ul>
            </div>
        </Fragment>
    )
}

export default FooterLink
