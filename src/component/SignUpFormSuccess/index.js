import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Form/Button'
import { signOutUserStart } from '../../redux/User/user.action'
import { useDispatch } from 'react-redux'
import "./styles.scss"

const SignUpFromSuccess = () => {
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(signOutUserStart())
    }

    return (
        <div className="LoginAccount">
            <div className="LoginAccount-MyAccount">
                <h1 className="LoginAccount-MyAccount__heading">My Account</h1>
                <Link className="LoginAccount-MyAccount__link" to="/" onClick={() => signOut()}>Log out</Link>
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
