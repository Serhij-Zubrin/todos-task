import { LOG_IN, LOG_OUT } from "../constants/action-constants"

export const logIn = (payload, callback) => ({
    type: LOG_IN,
    payload,
    callback
})

export const logOut = () => ({
    type: LOG_OUT,
})