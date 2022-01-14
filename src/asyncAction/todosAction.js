import { todosAPI } from "../api/api"
import { todosInit, todosErrorClear, todosError, todoSelect, errorNetworkShow, errorNetworkHide } from '../actions/todo'
import { modalShow } from "../actions/modal"

export const setTodos = () => async (dispatch) => {
    try {
        const response = await todosAPI.setTodos()
        dispatch(todosInit(response.data))
        dispatch(todosErrorClear())
    } catch (error) {
        dispatch(todosError())
    }
}

export const createTodo = (body) => async (dispatch) => {
    try {
        console.log(body);
        await todosAPI.addTodo(body)
        dispatch(setTodos())
    } catch (error) {
        let message = 'Undefined error';
        if (error.request.status === 0) {
            message = error.message;
        } else {
            message = JSON.parse(error.request.response).message;
        }
        dispatch(errorNetworkShow(message));
        setTimeout(() => {
            dispatch(errorNetworkHide());
        }, 5000);
    }
}

export const updateTodo = (id, body) => async (dispatch) => {
    try {
        await todosAPI.changeTodo(id, body)
        dispatch(setTodos())
    } catch (error) {
        let message = 'Undefined error';
        if (error.request.status === 0) {
            message = error.message;
        } else {
            message = JSON.parse(error.request.response).message;
        }
        dispatch(errorNetworkShow(message));
        setTimeout(() => {
            dispatch(errorNetworkHide());
        }, 5000);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        await todosAPI.deleteTodo(id)
        dispatch(setTodos())
    } catch (error) {
        let message = 'Undefined error';
        if (error.request.status === 0) {
            message = error.message;
        } else {
            message = JSON.parse(error.request.response).message;
        }
        dispatch(errorNetworkShow(message));
        setTimeout(() => {
            dispatch(errorNetworkHide());
        }, 5000);
    }
}

export const selectTodo = (id, dataShow) => async (dispatch) => {
    try {
        const responce = await todosAPI.chooseTodo(id)
        dispatch(todoSelect(responce.data));
        dispatch(modalShow(dataShow))
    } catch (error) {
        let message = 'Undefined error';
        if (error.request.status === 0) {
            message = error.message;
        } else {
            message = JSON.parse(error.request.response).message;
        }
        dispatch(errorNetworkShow(message));
        setTimeout(() => {
            dispatch(errorNetworkHide());
        }, 5000);
    }
}



