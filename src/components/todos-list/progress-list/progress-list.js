import React from 'react'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import sortTodosArray from '../../../util/sortArray.js'

import TodoCard from '../../todo-card/todo-card'

function ProgressList() {
    const state = useSelector(state => state);
    const { todoReducer: { todos } } = state;

    const todoList = sortTodosArray(todos, 'progress')

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

export default ProgressList
