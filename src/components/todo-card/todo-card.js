import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { modalHide } from '../../actions/modal'
import { Card, Button } from 'react-bootstrap'
import { deleteTodo, selectTodo } from '../../asyncAction/todosAction'

import './todo-card.scss'

function TodoCard(props) {
    const dispatch = useDispatch();
    const changaBtn = useRef()


    const { item: { _id, color, description, title } } = props

    const handleSelectTodo = (e) => {
        let dataShow = {
            isShow: true,
            todoBtn: changaBtn.current.dataset.btn
        }
        const id = e.target.parentNode.id;
        dispatch(selectTodo(id, dataShow))
    }

    const removeToDo = (e) => {
        let id = e.target.parentNode.id;
        dispatch(deleteTodo(id));
    }

    return (
        <div className='todo_card border border-secondary'
            style={{ backgroundColor: `${color}` }}
            id={_id}
            onClick={() => dispatch(modalHide())}
        >
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Button
                variant="outline-success"
                className='change_btn todo_btn'
                onClick={(e) => handleSelectTodo(e)}
                data-btn="change"
                ref={changaBtn}>Change</Button>
            <Button
                variant="outline-danger"
                className='change_btn todo_btn'
                onClick={(e) => removeToDo(e)}
            >Delete</Button>
        </div>
    )
}

export default TodoCard
