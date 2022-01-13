import { TODOS_INIT, TODO_SELECT, TODO_ISFETCHING, TODO_ERROR_ADD, TODO_ERROR_CLEAR, TODO_DELETE, TODO_MODAL_MESSAGE } from "../constants/action-constants";

export const todosInit = (payload) => ({
    type: TODOS_INIT,
    payload,
})

export const todoSelect = (payload) => ({
    type: TODO_SELECT,
    payload,
})

export const todoDelete = () => ({
    type: TODO_DELETE,
})

export const todosIsFetching = (payload) => ({
    type: TODO_ISFETCHING,
    payload,
})

export const todosError = () => ({
    type: TODO_ERROR_ADD,
})

export const todosErrorClear = () => ({
    type: TODO_ERROR_CLEAR,
})

export const todosMessage = () => ({
    type: TODO_MODAL_MESSAGE,
})
