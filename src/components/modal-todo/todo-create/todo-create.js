import React from 'react'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { modalShow } from '../../../actions/modal'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { createTodo } from '../../../asyncAction/todosAction'

import './todo-create.scss'

function TodoCreate(props) {
    const dispatch = useDispatch()
    const [formValid, setFormValid] = useState(false);
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState('Value longer than 5 characters')
    const [description, setDescription] = useState('')
    const [descriptionError, setDescriptionError] = useState('Value longer than 5 characters')


    useEffect(() => {
        if (titleError || descriptionError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [title, description]);

    const titleHandler = (e) => {
        setTitle(e.target.value);
        if (e.target.value.length <= 4) {
            setTitleError('Value longer than 5 characters');
            if (e.target.value === '') {
                setTitleError("Value  can't be empty");
            }
        } else {
            setTitleError('');
        }
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value);
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
        console.log(1);
        let body = {
            "title": title,
            "description": description
        }
        dispatch(createTodo(body))
        dispatch(modalShow({ isShow: !props.show, todoBtn: '' }))
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
                    <Button variant="danger" onClick={() => dispatch(modalShow({ isShow: !props.show, todoBtn: '' }))}>
                        <FontAwesomeIcon icon={faWindowClose} ></FontAwesomeIcon>
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-4 form_group">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" defaultValue={title}
                                onChange={(e) => titleHandler(e)}
                            />
                            <p className='input_error'>{titleError}</p>
                        </Form.Group>
                        <Form.Group className="mb-3 form_group" >
                            <Form.Label>Description </Form.Label>
                            <Form.Control type="text" placeholder="Enter description" defaultValue={description}
                                onChange={(e) => descriptionHandler(e)}
                            />
                            <p className='input_error'>{descriptionError}</p>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="btn btn-primary"
                        onClick={(e) => handleSubminForm(e)}
                        variant="primary"
                        disabled={!formValid}
                    >Save</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default TodoCreate

