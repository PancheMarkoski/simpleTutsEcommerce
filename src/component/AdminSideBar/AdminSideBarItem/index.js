import React from 'react'
import './styles.scss'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

const AdminSideBarItem = ({children, customStyle, signOutUserStart}) => {
    const dispatch = useDispatch()
    if(signOutUserStart) {
        return (
            <Link to="/" style={{listStyle: "none"}}>
                <div
                onClick={() => dispatch(signOutUserStart)} 
                className="AdminSideBarItem" 
                style={{paddingBottom: customStyle}}>
                    {children}
                </div>
            </Link>
        )
    } else {
        return (
            <div
            onClick={() => signOutUserStart} 
            className="AdminSideBarItem" 
            style={{paddingBottom: customStyle}}>
                {children}
            </div>
        )
    }
}

export default AdminSideBarItem
