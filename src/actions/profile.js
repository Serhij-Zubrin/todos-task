import { LOG_IN, LOG_OUT, LOG_ERROR, LOG_ERROR_CLEAR } from "../constants/action-constants"

export const logIn = () => (payload) => ({
    type: LOG_IN,
    payload,
})

export const logOut = () => ({
    type: LOG_OUT,
})


export const logError = (payload) => ({
    type: LOG_ERROR,
    payload,
})

export const logErrorClear = () => ({
    type: LOG_ERROR_CLEAR,
})