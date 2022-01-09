import React from 'react'
import { Button, Toast } from 'react-bootstrap'

import './header.scss'

function Header() {
    return (

        <div div className='header' >
            <Toast className='header_profile_container'>
                <Toast.Body>
                    <span className="me-auto">userName</span>
                </Toast.Body>
                <Toast.Body>                    <Button
                    // onClick={logOut}
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

