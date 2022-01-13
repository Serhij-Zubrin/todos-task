import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom"

import { useSelector } from 'react-redux'
import Auth from './auth'
import TodosPage from './todos-page'

function App(props) {
    const state = useSelector(state => state)
    const { userReducer: { isAuth } } = state;

    return isAuth ? (
        <Switch>
            <Route path={'/todo'} exact render={() => <TodosPage />} />
            <Redirect to={'/todo'} />
        </Switch>
    ) : (
        <Switch>
            <Route path={'/auth'} render={() => <Auth />} />
            <Redirect to={'/auth'} />
        </Switch>
    )
}

export default App