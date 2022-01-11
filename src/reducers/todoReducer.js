import { TODO_ADD, TODO_DELETE, TODOS_DOWNLOAD } from "../constants/action-constants";

export const todoReducer = (state = {}, action) => {
    switch (action.type) {
        case TODOS_DOWNLOAD:
            return {
                ...state,
                ...action.payload,
            }
        case TODO_ADD:
            return {
                ...state,
                ...action.payload,
            }
        case TODO_DELETE:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
} 