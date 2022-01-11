import React from 'react'
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { modalShow } from '../../actions/modal'
import TodoCard from '../todo-card/todo-card'
import ModalTodo from '../modal-todo'
import { todosAPI } from '../../api/api'
import { TodoDownload } from '../../actions/todo'
import './todos-tabel.scss'

function TodosTabel() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const { modalReducer: { isShow } } = state;
    const createBtn = useRef()

    useEffect(() => {
        todosAPI.getTodos().then(responce => {
            const { data } = responce;
            console.log(data);
            dispatch(TodoDownload(data));
            return responce.data
        }).catch(error => {
            if (error.responce) {
                console.log(error.responce.data);
                console.log(error.responce.status);
            } else if (error.request) {
                let message = JSON.parse(error.request.response);
                console.log(message);
            } else {
                console.log('Error', error.message);
            }
        }
        )
    }, []);
    const dispatchModal = (e) => {
        let data = {
            isShow: true,
            todoBtn: createBtn.current.dataset.btn
        }
        dispatch(modalShow(data))
    }

    return (
        <div className='todos-tabel'>
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
            {isShow ? <ModalTodo /> : null}
            <Button variant="danger" className='todo-add' ref={createBtn} data-btn="create" onClick={(e) => dispatchModal(e)}>
                <FontAwesomeIcon icon={faPlusCircle} className='btn_icon'></FontAwesomeIcon>
            </Button>
        </div>
    )
}

export default TodosTabel
