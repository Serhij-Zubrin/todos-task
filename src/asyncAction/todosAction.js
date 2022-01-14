import { todosAPI } from "../api/api"
import { todosInit, todosErrorClear, todosError, todoSelect, errorNetworkShow, errorNetworkHide, todosIsFetching } from '../actions/todo'
import { modalShow } from "../actions/modal"

export const setTodos = () => async (dispatch) => {
    try {
        dispatch(todosIsFetching(true))
        const response = await todosAPI.setTodos()
        dispatch(todosInit(response.data))
        dispatch(todosIsFetching(false))
        dispatch(todosErrorClear())
    } catch (error) {
        dispatch(todosIsFetching(false))
        dispatch(todosError())
    }
}

export const createTodo = (body) => async (dispatch) => {
    try {
        dispatch(todosIsFetching(true))
        await todosAPI.addTodo(body)
        dispatch(setTodos())
        dispatch(todosIsFetching(false))
    } catch (error) {
        let message = 'Undefined error';
        if (error.request.status === 0) {
            message = error.message;
        } else {
            message = JSON.parse(error.request.response).message;
        }
        dispatch(todosIsFetching(false))
        dispatch(errorNetworkShow(message));
        setTimeout(() => {
            dispatch(errorNetworkHide());
        }, 5000);
    }
}

export const updateTodo = (id, body) => async (dispatch) => {
    try {
        dispatch(todosIsFetching(true))
        await todosAPI.changeTodo(id, body)
        dispatch(setTodos())
        dispatch(todosIsFetching(false))
    } catch (error) {
        let message = 'Undefined error';
        if (error.request.status === 0) {
            message = error.message;
        } else {
            message = JSON.parse(error.request.response).message;
        }
        dispatch(todosIsFetching(false))
        dispatch(errorNetworkShow(message));
        setTimeout(() => {
            dispatch(errorNetworkHide());
        }, 5000);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        dispatch(todosIsFetching(true))
        await todosAPI.deleteTodo(id)
        dispatch(setTodos())
        dispatch(todosIsFetching(false))
    } catch (error) {
        let message = 'Undefined error';
        if (error.request.status === 0) {
            message = error.message;
        } else {
            message = JSON.parse(error.request.response).message;
        }
        dispatch(todosIsFetching(false))
        dispatch(errorNetworkShow(message));
        setTimeout(() => {
            dispatch(errorNetworkHide());
        }, 5000);
    }
}

export const selectTodo = (id, dataShow) => async (dispatch) => {
    try {
        dispatch(todosIsFetching(true))
        const responce = await todosAPI.chooseTodo(id)
        dispatch(todoSelect(responce.data));
        dispatch(todosIsFetching(false))
        dispatch(modalShow(dataShow))
    } catch (error) {
        let message = 'Undefined error';
        if (error.request.status === 0) {
            message = error.message;
        } else {
            message = JSON.parse(error.request.response).message;
        }
        dispatch(todosIsFetching(false))
        dispatch(errorNetworkShow(message));
        setTimeout(() => {
            dispatch(errorNetworkHide());
        }, 5000);
    }
}



