import { MODAL_SHOW } from "../constants/action-constants";

const initial_state = {
    isShow: false,
}

export const modalReducer = (state = initial_state, action) => {
    switch (action.type) {
        case MODAL_SHOW:
            return { ...state, isShow: action.payload }
        default:
            return state
    }
} 