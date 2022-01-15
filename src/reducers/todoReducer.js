import { TODOS_INIT, TODO_SELECT, TODO_SELECT_CLEAR, TODO_ISFETCHING, TODO_ERROR_ADD, TODO_ERROR_CLEAR, TODO_DELETE, TODO_CHANGE, TODO_ERROR_NETWORK_SHOW, TODO_ERROR_NETWORK_HIDE } from "../constants/action-constants";

const initial_state = {
    isFetching: false,
    todos: [],
    selectTodo: {},
    errorMessage: '',
    errorShow: false,
    errorNetwork: "hide"
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
                selectTodo: action.payload,
            }

        case TODO_SELECT_CLEAR:
            return {
                ...state,
                selectTodo: initial_state.selectTodo,
            }
        case TODO_CHANGE:
            return {
                ...state,
            }
        case TODO_DELETE:
            return {
                ...state,
            }

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

        case TODO_ERROR_NETWORK_SHOW:
            return {
                ...state,
                errorNetwork: " error_container show",
                errorMessage: action.payload
            }

        case TODO_ERROR_NETWORK_HIDE:
            return {
                ...state,
                errorNetwork: " error_container hide",
                errorMessage: initial_state.errorMessage
            }

        default:
            return state
    }

} 