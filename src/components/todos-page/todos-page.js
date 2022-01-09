import React from 'react'

import Header from '../header'
import TodosTabel from '../todos-tabel'

import './todos-page.scss'

function TodosPage() {
    return (
        <div className='todo-page'>
            <Header />
            <TodosTabel />
        </div>
    )
}

export default TodosPage
