import { TODOS_INIT, TODO_SELECT, TODO_ISFETCHING, TODO_ERROR_ADD, TODO_ERROR_CLEAR, TODO_DELETE, TODO_MODAL_MESSAGE } from "../constants/action-constants";

const initial_state = {
    isFetching: false,
    todos: [],
    selectTodos: {},
    errorMessega: '',
    errorShow: false,
    modalMassega: false,
    modalShow: "hide"
};


export const todoReducer = (state = initial_state, action) => {
    switch (action.type) {
        case TODOS_INIT:
            return {
                ...state,
                todos: action.payload,
            }

        case TODO_SELECT:
            return {
                ...state,
                ...action.payload,
            }

        case TODO_DELETE:
            return {
                ...state,
            }

        //TODO Write snippet
        case TODO_ISFETCHING:
            return {
                ...state,
                isFetching: action.payload,
            }

        case TODO_ERROR_ADD:
            return {
                ...state,
                errorShow: true,
            }

        case TODO_ERROR_CLEAR:
            return {
                ...state,
                errorShow: false,
            }


        case TODO_MODAL_MESSAGE:
            return {
                ...state,
                errorShow: true,
            }

        default:
            return state
    }

} 