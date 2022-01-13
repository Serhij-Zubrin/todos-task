import React from 'react'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import sortTodosArray from '../../../util/sortArray.js'

import TodoCard from '../../todo-card/todo-card'

function PlannedList() {
    const state = useSelector(state => state);
    const { todoReducer: { todos } } = state;

    const todoList = useMemo(() => sortTodosArray(todos, 'planned'), [todos])

    const renderTodo = (arr) => {
        return arr.map((item) => {
            const { _id } = item;
            return (
                <TodoCard key={_id} item={item} />
            )
        })
    }

    const item = renderTodo(todoList)

    return (
        <>
            {item}
        </>
    )
}

export default PlannedList
