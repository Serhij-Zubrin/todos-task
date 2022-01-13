import { LOG_IN, LOG_OUT, LOG_ERROR, LOG_ERROR_CLEAR } from "../constants/action-constants"

const initial_state_user = {
    email: '',
    id: '',
    token: '',
    isPassword: false,
    isAuth: false,
    errorMessage: '',
    errorShow: false,
}

export const userReducer = (state = initial_state_user, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }

        case LOG_OUT:
            return {
                ...state,
                email: initial_state_user.email,
                id: initial_state_user.id,
                isPassword: initial_state_user.isPassword,
                token: initial_state_user.token,
                isAuth: false
            }
        case LOG_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                errorShow: true
            }
        case LOG_ERROR_CLEAR:
            return {
                ...state,
                errorMessage: initial_state_user.errorMessage,
                errorShow: false
            }

        default:
            return state
    }
} 