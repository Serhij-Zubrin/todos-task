import React from 'react'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { modalShow } from '../../actions/modal'
import { Card, Button } from 'react-bootstrap'

import './todo-card.scss'

function TodoCard() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const { modalReducer: { isShow } } = state;
    const changaBtn = useRef()

    const dispatchModal = (e) => {
        let data = {
            isShow: true,
            todoBtn: changaBtn.current.dataset.btn
        }
        dispatch(modalShow(data))
    }

    return (
        <div className='todo_card'
            style={{ backgroundColor: "white" }}
            onClick={() => dispatch(modalShow(!isShow))}
        >
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button
                variant="outline-success"
                className='change_btn todo_btn'
                onClick={(e) => dispatchModal(e)}
                data-btn="change"
                ref={changaBtn}>Change</Button>
            <Button variant="outline-danger" className='change_btn todo_btn'>Delete</Button>
        </div>
    )
}

export default TodoCard
