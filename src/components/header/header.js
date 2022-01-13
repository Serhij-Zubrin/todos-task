import React from 'react'
import { Button, Toast } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../asyncAction/useActions'

import './header.scss'

function Header() {
    const state = useSelector(state => state);
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userReducer: { email } } = state;

    const handlerLogOut = (e) => {
        const data = {
            email: '',
            id: '',
            isPassword: false,
        }
        dispatch(logoutUser(data));
    }
    return (
        <div div className='header' >
            <Toast className='header_profile_container'>
                <Toast.Body>
                    <span className="me-auto header_name">{email}</span>
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

