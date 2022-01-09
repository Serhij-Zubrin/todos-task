import { TODO_ADD, TODO_DELETE } from "../constants/action-constants";

const initial_state = {
    id: '',
    title: '',
    description: '',
    status: 'planned',
    backgroundColor: 'white',
}

export const todoReducer = (state = initial_state, action) => {
    switch (action.type) {
        case TODO_ADD:
            return { ...state }
        case TODO_DELETE:
            return { ...state }
        default:
            return state
    }
} 