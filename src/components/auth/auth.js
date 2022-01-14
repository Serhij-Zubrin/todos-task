import React from 'react'
import { useSelector } from 'react-redux'
import AuthenticationForm from '../authentication-form'
import Spinner from '../ui/spinner'

import './auth.scss'

function Auth() {
    const state = useSelector(state => state);

    const { todoReducer: { isFetching } } = state;
    return (
        <div className='auth'>
            <AuthenticationForm />
            {isFetching ? <Spinner /> : null}
        </div>
    )
}

export default Auth
