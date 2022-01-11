import { LOG_IN, LOG_OUT } from "../constants/action-constants"

const initial_state = {
    email: '',
    id: '',
    isPassword: false,
    token: '',
    isAuth: false
}

export const userReducer = (state = initial_state, action) => {
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
                ...action.payload,
                isAuth: false
            }
        default:
            return state
    }
} 