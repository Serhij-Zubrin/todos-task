import { authAPI } from "../api/api"
import { logError, logErrorClear, logOut } from '../actions/profile'
import { errorNetworkHide, errorNetworkShow } from "../actions/todo"
import { todosIsFetching } from "../actions/todo"


export const loginUser = (data) => async (dispatch) => {
    try {
        dispatch(todosIsFetching(true))
        const response = await authAPI.authLogIn(data)
        const { token } = response.data;
        localStorage.setItem('token', JSON.stringify(token));
        dispatch({ type: 'LOG_IN', payload: response.data })
        dispatch(todosIsFetching(false))
    } catch (error) {
        console.log(error.toJSON())
        console.log(error.request);
        let message = 'Undefined error';
        if (error.request.status === 0) {
            message = error.message;
        } else {
            message = JSON.parse(error.request.response).message;
        }
        dispatch(todosIsFetching(false))
        dispatch(logError(message));
        setTimeout(() => {
            dispatch(logErrorClear());
        }, 3000);
    }
}

export const logoutUser = (data) => async (dispatch) => {
    try {
        dispatch(todosIsFetching(true))
        await authAPI.authLogOut(data)
        localStorage.removeItem('token');
        dispatch(logOut())
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