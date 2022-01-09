import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { modalShow } from '../../actions/modal'
import TodoCard from '../todo-card/todo-card'
import ModalTodo from '../modal-todo'
import './todos-tabel.scss'

function TodosTabel() {
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const { modalReducer: { isShow } } = state
    console.log(isShow);
    return (
        <div className='todos-tabel'>
            <Button variant="danger" className='todo-add' onClick={() => dispatch(modalShow(!isShow))}>
                <FontAwesomeIcon icon={faPlusCircle} className='btn_icon'></FontAwesomeIcon>
            </Button>
            <Card className='status_card'>
                <h2 className='title-status'>planned</h2>
                <Card.Body className='status_body'>
                    <TodoCard />
                </Card.Body>
            </Card>
            <Card className='status_card'>
                <h2 className='title-status'>progress</h2>
                <Card.Body className='status_body'>
                </Card.Body>
            </Card>
            <Card className='status_card' >
                <h2 className='title-status'>done</h2>
                <Card.Body className='status_body'>
                </Card.Body>
            </Card>
            <ModalTodo
                show={isShow}
            />
        </div>
    )
}

export default TodosTabel
