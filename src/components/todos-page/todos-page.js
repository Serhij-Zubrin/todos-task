import React from 'react'

import Header from '../header'
import TodosTabel from '../todos-tabel'

import './todos-page.scss'

function TodosPage() {
    return (
        <div className='todo-page'>
            <Header />
            <div className='todos_container'>
                <TodosTabel />
            </div>

        </div>
    )
}

export default TodosPage
