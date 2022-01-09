import { LOG_IN, LOG_OUT } from "../constants/action-constants"

const initial_state = {
    email: '',
    password: '',
    id: '',
    isPassword: false
}

export const userReducer = (state = initial_state, action) => {
    switch (action.type) {
        case LOG_IN:
            return { ...state }
        case LOG_OUT:
            return state
        default:
            return state
    }
} 