import { ALERT_TEXT_ADD } from "../constants/action-constants";

const initial_state = {
    message: '',
};

export const alertTextReducer = (state = initial_state, action) => {
    switch (action.type) {
        case ALERT_TEXT_ADD:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
} 