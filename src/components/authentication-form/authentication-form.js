import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Form, Modal } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { authAPI } from '../../api/api'
import { modalShow } from '../../actions/modal'
import { logIn } from '../../actions/profile'
import { alertText } from '../../actions/alertAction'

import './authentication-form.scss'

function AuthenticationForm() {
    const state = useSelector(state => state);
    const { modalReducer: { isShow } } = state;
    const { alertTextReducer: { message } } = state
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState("Email can't be empty");
    const [passwordError, setPasswordError] = useState("Password can't be empty");
    const [validForm, setValidForm] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setValidForm(false)
        } else {
            setValidForm(true)
        }
    }, [emailError, passwordError]);

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Email is not correct')
        } else {
            setEmailError('');
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value.trim());
        if (e.target.value.trim().length <= 3) {
            setPasswordError('Password is longer than 3 characters');
            if (e.target.value.trim() === '') {
                setPasswordError("Password can't be empty");
            }
        } else {
            setPasswordError('');
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const data = ({
            email: email,
            password: password,
        });
        authAPI.authLogIn(data).then(responce => {
            const { data } = responce;
            const { token } = data;
            localStorage.setItem('token', JSON.stringify(token));
            dispatch(logIn(data));
            navigate("/todos_page", { replace: true });
            return responce.data
        }).catch(error => {
            if (error.responce) {
                console.log(error.responce.data);
                console.log(error.responce.status);
            } else if (error.request) {
                let message = JSON.parse(error.request.response);
                showAlert(message);
            } else {
                console.log('Error', error.message);
            }
        }
        )
    };

    const showAlert = (text) => {
        dispatch(alertText(text));
        dispatch(modalShow(!isShow));
        setTimeout(() => {
            dispatch(modalShow(isShow));
        }, 3000);
    };

    return (
        <>
            <Form className='authentication_block ' onSubmit={handleFormSubmit} >
                <h3 className='authentication_title'>Sing In</h3>
                <div className='authentication_form'>
                    <Form.Group className="mb-4 form_group" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name='email'
                            placeholder="Enter email"
                            value={email}
                            onBlur={e => blurHandler(e)}
                            onChange={e => emailHandler(e)}
                        />
                        {(emailDirty && emailError) && <p className='error' >{emailError}</p>}
                    </Form.Group>
                    <Form.Group className="mb-4 form_group" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name='password'
                            placeholder="Password"
                            value={password}
                            onBlur={e => blurHandler(e)}
                            onChange={e => passwordHandler(e)}
                        />
                        {(passwordDirty && passwordError) && <p className='error' >{passwordError}</p>}
                    </Form.Group>
                    <button
                        className="btn btn-primary"
                        type='submit'
                        disabled={!validForm}
                    >
                        Submit
                    </button>
                </div>
            </Form>
            <Modal
                size="sm"
                show={isShow}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Body className='alert_message'>{message}</Modal.Body>
            </Modal>
        </>
    )

}

export default AuthenticationForm
