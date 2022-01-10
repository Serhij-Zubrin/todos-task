import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { modalReducer } from "../reducers/modalReducer";
import { todoReducer } from '../reducers/todoReducer'
import { userReducer } from '../reducers/userReducer'
import { alertTextReducer } from "../reducers/alertReducer";

const rootReducer = combineReducers({
    modalReducer,
    todoReducer,
    userReducer,
    alertTextReducer,
})

const store = createStore(
    rootReducer, applyMiddleware(thunk)
)

export default store