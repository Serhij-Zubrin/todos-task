import { authAPI } from "../api/api"
import { logError, logErrorClear, logOut } from '../actions/profile'
import { errorNetworkHide, errorNetworkShow } from "../actions/todo"


export const loginUser = (data) => async (dispatch) => {
    try {
        const response = await authAPI.authLogIn(data)
        const { token } = response.data;
        localStorage.setItem('token', JSON.stringify(token));
        dispatch({ type: 'LOG_IN', payload: response.data })
        // dispatch(logIn(response.data))
    } catch (error) {
        console.log(error.toJSON())
        console.log(error.request);
        let message = 'Undefined error';
        if (error.request.status === 0) {
            message = error.message;
        } else {
            message = JSON.parse(error.request.response).message;
        }
        dispatch(logError(message));
        setTimeout(() => {
            dispatch(logErrorClear());
        }, 3000);
    }
}

export const logoutUser = (data) => async (dispatch) => {
    try {
        await authAPI.authLogOut(data)
        localStorage.removeItem('token');
        dispatch(logOut())
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