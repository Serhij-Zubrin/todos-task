import React from 'react'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import sortTodosArray from '../../../util/sortArray.js'

import TodoCard from '../../todo-card/todo-card'

function DoneList() {
    const state = useSelector(state => state);
    const { todoReducer: { todos } } = state;

    // TODO: Merge three components (remove copy-paste) 
    const todoList = useMemo(() => sortTodosArray(todos, 'done'), [todos])

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

export default DoneList
