import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/utils'
import Button from '../Form/Button'
import "./styles.scss"

const SignUpFromSuccess = () => {
    return (
        <div className="LoginAccount">
        <div className="LoginAccount-MyAccount">
            <h1 className="LoginAccount-MyAccount__heading">My Account</h1>
            <Link className="LoginAccount-MyAccount__link" to="/" onClick={() => auth.signOut()}>Log out</Link>
        </div>
        <div className="LoginAccount-desktop">
            <div className="LoginAccount-OrderHistory">
                <h2 className="LoginAccount-OrderHistory__heading">Order History</h2>
                <p className="LoginAccount-OrderHistory__paragraph">You haven't placed any orders yet.</p>
            </div>
            <div className="LoginAccount-AccountDetails">
                <h2 className="LoginAccount-AccountDetails__heading">Account Details</h2>
                <Button>View Addresses (0)</Button>
            </div>
        </div>
    </div>

    )
}

export default SignUpFromSuccess
