import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Toast } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../actions/profile'

import './header.scss'

function Header() {
    const state = useSelector(state => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userReducer: { email } } = state;

    const handlerLogOut = (e) => {
        const data = {
            email: '',
            id: '',
            isPassword: false,
        }
        dispatch(logOut(data));
        navigate("/", { replace: true });
    }
    return (
        <div div className='header' >
            <Toast className='header_profile_container'>
                <Toast.Body>
                    <span className="me-auto">{email}</span>
                </Toast.Body>
                <Toast.Body>
                    <Button
                        onClick={(e) => { handlerLogOut(e) }}
                        className="logout_bnt"
                        variant="primary"
                    >    Sign out
                    </Button>
                </Toast.Body>
            </Toast>
        </div>

    )
}

export default Header

