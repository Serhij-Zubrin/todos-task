import { authAPI } from "../api/api"
import { logError, logErrorClear, logOut } from '../actions/profile'
import { logIn } from "../actions/profile"


export const loginUser = (data) => async (dispatch) => {
    try {
        const response = await authAPI.authLogIn(data)
        const { token } = response.data;
        localStorage.setItem('token', JSON.stringify(token));
        dispatch({ type: 'LOG_IN', payload: response.data })
        // dispatch(logIn(response.data))
    } catch (error) {
        let err = JSON.parse(error.request.response);
        dispatch(logError(err.message));
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
        let err = JSON.parse(error.request.response);
        dispatch(logError(err.message));
        setTimeout(() => {
            dispatch(logErrorClear());
        }, 3000);
    }
}