import { LOG_IN, LOG_OUT } from "../constants/action-constants"

export const logIn = (payload) => ({
    type: LOG_IN,
    payload,
})

export const logOut = (payload) => ({
    type: LOG_OUT,
    payload,
})