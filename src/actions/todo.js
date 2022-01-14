import { TODOS_INIT, TODO_SELECT, TODO_SELECT_CLEAR, TODO_ISFETCHING, TODO_ERROR_ADD, TODO_ERROR_CLEAR, TODO_DELETE, TODO_CHANGE, TODO_ERROR_NETWORK_SHOW, TODO_ERROR_NETWORK_HIDE } from "../constants/action-constants";

export const todosInit = (payload) => ({
    type: TODOS_INIT,
    payload,
})

export const todoSelect = (payload) => ({
    type: TODO_SELECT,
    payload,
})

export const todoSelectClear = () => ({
    type: TODO_SELECT_CLEAR,
})

export const todoDelete = () => ({
    type: TODO_DELETE,
})

export const todoChange = () => ({
    type: TODO_CHANGE,
})

export const todosIsFetching = (payload) => ({
    type: TODO_ISFETCHING,
    payload,
})

export const todosError = (payload) => ({
    type: TODO_ERROR_ADD,
    payload,
})

export const todosErrorClear = () => ({
    type: TODO_ERROR_CLEAR,
})

export const errorNetworkShow = (payload) => ({
    type: TODO_ERROR_NETWORK_SHOW,
    payload,
})

export const errorNetworkHide = () => ({
    type: TODO_ERROR_NETWORK_HIDE
})



