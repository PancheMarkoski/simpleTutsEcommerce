import React from 'react'
import "./styles.scss"
import {Link} from 'react-router-dom'

const AdminToolbar = () => {
    return (
        <div className="adminToolbar">
            <ul className="adminToolbar-ul">
                <li className="adminToolbar-li">
                    <Link to="/admin" className="adminToolbar-li__link">
                        Admin
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default AdminToolbar
