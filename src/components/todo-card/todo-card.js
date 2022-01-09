import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { modalShow } from '../../actions/modal'
import { Card } from 'react-bootstrap'

import './todo-card.scss'

function TodoCard() {
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const { modalReducer: { isShow } } = state
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
        </div>
    )
}

export default TodoCard
