import React from 'react'
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { modalShow } from '../../actions/modal'
import { setTodos } from '../../asyncAction/todosAction'

import ModalTodo from '../modal-todo'
import DoneList from '../todos-list/done-list'
import PlannedList from '../todos-list/planned-list'
import ProgressList from '../todos-list/progress-list'
import ErrorIndicator from '../error-indicator/error-indicator'

import './todos-tabel.scss'
import Spinner from '../ui/spinner'

function TodosTabel() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const { modalReducer: { isShow } } = state;
    const { todoReducer: { errorShow, errorNetwork, errorMessage, isFetching } } = state;
    const createBtn = useRef();

    useEffect(() => {
        dispatch(setTodos())
    }, []);

    const dispatchModal = (e) => {
        let data = {
            isShow: true,
            todoBtn: createBtn.current.dataset.btn
        }
        dispatch(modalShow(data))
    }

    if (errorShow) {
        return <ErrorIndicator />
    }

    return (
        <div className='todos-tabel'>
            <Card className='status_card'>
                <h2 className='title-status'>planned</h2>
                <Card.Body className='status_body'>
                    <PlannedList />
                </Card.Body>
            </Card>
            <Card className='status_card'>
                <h2 className='title-status'>progress</h2>
                <Card.Body className='status_body'>
                    <ProgressList />
                </Card.Body>
            </Card>
            <Card className='status_card' >
                <h2 className='title-status'>done</h2>
                <Card.Body className='status_body'>
                    <DoneList />
                </Card.Body>
            </Card>
            {isShow ? <ModalTodo /> : null}
            <div className={errorNetwork} >
                <p className='error_todo'>
                    <span className='font-monospace '>
                        {errorMessage}
                    </span>
                </p>
            </div>
            <Button variant="danger" className='todo-add' ref={createBtn} data-btn="create" onClick={(e) => dispatchModal(e)}>
                <FontAwesomeIcon icon={faPlusCircle} className='btn_icon'></FontAwesomeIcon>
            </Button>
            {isFetching ? <Spinner /> : null}
        </div>
    )
}

export default TodosTabel
