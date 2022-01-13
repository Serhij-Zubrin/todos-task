import { todosAPI } from "../api/api"
import { todosInit, todosErrorClear, todosError, addTodo } from '../actions/todo'

export const setTodos = () => async (dispatch) => {
    try {
        // console.log('setTODOS');
        const response = await todosAPI.setTodos()
        dispatch(todosInit(response.data))
        dispatch(todosErrorClear())
    } catch (error) {
        console.log(error);
        dispatch(todosError())
    }
}

export const createTodo = (body) => async (dispatch) => {
    try {
        console.log(body);
        await todosAPI.addTodo(body)
        dispatch(setTodos())
    } catch (error) {
        console.log(error);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        // console.log('deletTodo before:  dispatch(setTodos())');
        await todosAPI.deleteTodo(id)
        dispatch(setTodos())
        // console.log('deletTodo after:  dispatch(setTodos())');
    } catch (error) {
        console.log(error);
    }
}

