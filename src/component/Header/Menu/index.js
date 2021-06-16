import React, { Fragment } from 'react'
import Media from 'react-responsive'
import './styles.scss'

// Redux
import { useSelector } from 'react-redux'

const mapState = ({header}) => ({
    onMenuBtnClick: header.mobileMenu
})

    const Menu = () => {
        const {onMenuBtnClick} = useSelector(mapState)
            return (
                <Fragment>
                <Media query="(min-width: 750px)">
                <ul className="DesktopMenu">
                    <li className="DesktopMenu__listItem">Men</li>
                    <li className="DesktopMenu__listItem">Woman</li>
                    <li className="DesktopMenu__listItem">Blog</li>
                    <li className="DesktopMenu__listItem">About</li>
                    <li className="DesktopMenu__listItem">Contact</li>
                </ul>
                </Media>
                <ul className={onMenuBtnClick ? "MenuActive" : "MenuDeactive"}>
                    <li>Men</li>
                    <li>Woman</li>
                    <li>Blog</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </Fragment>        
            )
}

export default Menu
