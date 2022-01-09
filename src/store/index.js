import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { modalReducer } from "../reducers/modalReducer";
import { todoReducer } from '../reducers/todoReducer'
import { userReducer } from '../reducers/userReducer'

const rootReducer = combineReducers({
    modalReducer,
    todoReducer,
    userReducer
})

const store = createStore(
    rootReducer, applyMiddleware(thunk)
)

export default store