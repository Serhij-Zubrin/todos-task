import React from 'react'
import { Routes, Route } from "react-router-dom"
// import { useSelector, useDispatch } from 'react-redux'
import Auth from './auth'
import TodosPage from './todos-page'



function App(props) {

    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Auth />} />
                <Route path="/todos_page" element={<TodosPage />} />
            </Routes>

        </div>
    )
}

export default App
