import React from 'react'
import { useDispatch } from 'react-redux'
import { Modal, Button, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { modalShow } from '../../actions/modal'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import './modal-todo.scss'

function ModalTodo(props) {
    const dispatch = useDispatch()

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
                    <Button variant="danger" onClick={() => dispatch(modalShow(!props.show))}>
                        <FontAwesomeIcon icon={faWindowClose} ></FontAwesomeIcon>
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-2">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" defaultValue='' />
                        </Form.Group>
                        <Form.Group className="mb-2" >
                            <Form.Label>Description </Form.Label>
                            <Form.Control type="text" placeholder="Enter description" defaultValue='' />
                        </Form.Group>
                        <Form.Group className="mb-2" >
                            <Form.Label>Status </Form.Label>
                            <Form.Select aria-label="Default select example" className="mb-2">
                                <option value="planned">Planned</option>
                                <option value="progress">Progress</option>
                                <option value="done">Done</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Background color </Form.Label>
                            <Form.Select aria-label="Default select example">
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
                    <Button variant="outline-danger" >Delete</Button>
                    <Button variant="primary" >Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalTodo

