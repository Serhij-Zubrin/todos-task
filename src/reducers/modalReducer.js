import { MODAL_SHOW } from "../constants/action-constants";

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
        default:
            return state
    }
} 