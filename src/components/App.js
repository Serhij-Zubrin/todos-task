import React from 'react'
import { Routes, Route } from "react-router"

import { useSelector } from 'react-redux'
import Auth from './auth'
import TodosPage from './todos-page'



function App(props) {
    const state = useSelector(state => state)
    const { userReducer: { isAuth } } = state;

    console.log(isAuth);
    console.log(state);

    return (
        <div>
            <Routes>
                {/* <Route exact
                    path="/"
                    render={(isAuth) => {
                        return (
                            isAuth ?
                                <Navigate to="/auth" /> :
                                <Navigate to="/todos_page" />
                        )
                    }}
                /> */}
                <Route path="/" exact element={<Auth />} />
                <Route path="/todos_page" element={<TodosPage />} />
            </Routes>
        </div>
    )
}

export default App
