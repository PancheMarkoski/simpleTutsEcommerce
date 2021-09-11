import React from 'react'
import "./styles.scss"

// Component
import AdminSideBarItem from './AdminSideBarItem'

// Icons
import { GoSignOut } from 'react-icons/go';
import { AiFillHome } from 'react-icons/ai';
import { RiAdminFill } from 'react-icons/ri';
// Action
import {signOutUserStart} from '../../redux/User/user.action'

const AdminSideBar = () => {
    return (
        <div className="AdminSideBar">
            <AdminSideBarItem customStyle={"10px"}>
                <RiAdminFill style={{display: "block",color: "black", margin: "0 auto", fontSize: "3rem", marginTop: "10px"}}/>
                Administrator
            </AdminSideBarItem>
            <AdminSideBarItem>
                <AiFillHome style={{color: "black", marginRight: "10px"}}/>
                Home
            </AdminSideBarItem>
            <AdminSideBarItem signOutUserStart={signOutUserStart()}>
                <GoSignOut style={{color: "black", marginRight: "10px"}}/>
                Sign Out
            </AdminSideBarItem>
        </div>
    )
}

export default AdminSideBar
