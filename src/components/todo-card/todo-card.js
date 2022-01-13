import React from 'react'
import { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { modalShow } from '../../actions/modal'
import { Card, Button } from 'react-bootstrap'
import { deleteTodo, setTodos } from '../../asyncAction/todosAction'

import './todo-card.scss'

function TodoCard(props) {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const { modalReducer: { isShow } } = state;
    const changaBtn = useRef()


    const { item: { _id, color, description, title } } = props
    const dispatchModal = (e) => {
        let data = {
            isShow: true,
            todoBtn: changaBtn.current.dataset.btn
        }
        dispatch(modalShow(data));
        console.log(e.target.parentNode.id);
    }

    const removeToDo = (e) => {
        let id = e.target.parentNode.id;
        dispatch(deleteTodo(id));
    }

    return (
        <div className='todo_card'
            style={{ backgroundColor: `${color}` }}
            id={_id}
            onClick={() => dispatch(modalShow(!isShow))}
        >
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Button
                variant="outline-success"
                className='change_btn todo_btn'
                onClick={(e) => dispatchModal(e)}
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
