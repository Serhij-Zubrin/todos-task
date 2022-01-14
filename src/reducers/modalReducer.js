import { MODAL_SHOW, MODAL_HIDE } from "../constants/action-constants";

const initial_state = {
    isShow: false,
    todoBtn: ""
}

//TODO  Ппереробити показ модального вікна
export const modalReducer = (state = initial_state, action) => {
    switch (action.type) {
        case MODAL_SHOW:
            return {
                ...state,
                ...action.payload
            }
        case MODAL_HIDE:
            return {
                ...state,
                isShow: initial_state.isShow,
                todoBtn: initial_state.todoBtn
            }
        default:
            return state
    }
} 