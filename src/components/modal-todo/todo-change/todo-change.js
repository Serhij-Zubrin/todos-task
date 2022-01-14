import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Form, Button } from 'react-bootstrap'
import { modalHide } from '../../../actions/modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { updateTodo } from '../../../asyncAction/todosAction'

import './todo-change.scss'



const TodoChange = (props) => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const { todoReducer: { selectTodo: { title, description, _id, color, status } } } = state;
    const inputTitle = useRef();
    const inputDescription = useRef();
    const inputColor = useRef();
    const inputStatus = useRef();
    const [formValid, setFormValid] = useState(false);
    const [titleValid, setTitleValid] = useState(title);
    const [titleError, setTitleError] = useState('')
    const [descriptionValid, setDescriptionValid] = useState(description)
    const [descriptionError, setDescriptionError] = useState('')


    useEffect(() => {
        if (titleError || descriptionError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [titleError, descriptionError]);

    const titleHandler = (e) => {
        setTitleValid(e.target.value);
        if (e.target.value.length <= 4 || title.length <= 4) {
            setTitleError('Value longer than 5 characters');
            if (e.target.value === '') {
                setTitleError("Value  can't be empty");
            }
        } else {
            setTitleError('');
        }
    }

    const descriptionHandler = (e) => {
        setDescriptionValid(e.target.value);
        if (e.target.value.length <= 4) {
            setDescriptionError('Value longer than 5 characters');
            if (e.target.value === '') {
                setDescriptionError("Value  can't be empty");
            }
        } else {
            setDescriptionError('');
        }
    }

    const handleSubminForm = (e) => {
        e.preventDefault()

        let body = {
            title: inputTitle.current.value,
            description: inputDescription.current.value,
            color: inputColor.current.value,
            status: inputStatus.current.value,
        }
        dispatch(updateTodo(_id, body))
        dispatch(modalHide())
    }

    return (
        <>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Todo</Modal.Title>
                    <Button variant="danger" onClick={() => dispatch(modalHide())}>
                        <FontAwesomeIcon icon={faWindowClose} ></FontAwesomeIcon>
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-4 form_group">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" defaultValue={titleValid} ref={inputTitle} onChange={(e) => titleHandler(e)} />
                            <p className='input_error'>{titleError}</p>
                        </Form.Group>
                        <Form.Group className="mb-4 form_group" >
                            <Form.Label>Description </Form.Label>
                            <Form.Control type="text" placeholder="Enter description" defaultValue={descriptionValid} ref={inputDescription}
                                onChange={(e) => descriptionHandler(e)}
                            />
                            <p className='input_error'>{descriptionError}</p>
                        </Form.Group>
                        <Form.Group className="mb-2" >
                            <Form.Label>Status </Form.Label>
                            <Form.Select aria-label="Default select example" className="mb-2" defaultValue={status} ref={inputStatus}>
                                <option value="planned">Planned</option>
                                <option value="progress">Progress</option>
                                <option value="done">Done</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Background color </Form.Label>
                            <Form.Select aria-label="Default select example" defaultValue={color} ref={inputColor}>
                                <option value="white">white</option>
                                <option value="bisque">bisque</option>
                                <option value="aquamarine">aquamarine</option>
                                <option value="cornflowerblue">cornflowerblue</option>
                                <option value="chocolate">chocolate</option>
                                <option value="fuchsia">fuchsia</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="btn btn-primary"
                        disabled={!formValid}
                        onClick={(e) => handleSubminForm(e)}>Save</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TodoChange

