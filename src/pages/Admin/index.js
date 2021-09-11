import React from 'react'
import "./styles.scss"
import OnMobileMenuTransition from '../../component/Hoc/OnMobileMenuTransition/OnMobileMenuTransition'

// Components
import AdminSideBar from '../../component/AdminSideBar'
import AdminAddProduct from '../../component/AdminAddProduct'

const Admin = () => {
    return (
        <OnMobileMenuTransition>
            <div className="Admin">
                <AdminSideBar />
                <AdminAddProduct />
            </div>
        </OnMobileMenuTransition>
    )
}

export default Admin
