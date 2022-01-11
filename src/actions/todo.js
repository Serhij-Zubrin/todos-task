import { TODO_ADD, TODO_DELETE, TODOS_DOWNLOAD } from "../constants/action-constants";

export const TodoAdd = (payload) => ({
    type: TODO_ADD,
    payload,
})

export const TodoDelete = (payload) => ({
    type: TODO_DELETE,
    payload,
})

export const TodoDownload = (payload) => ({
    type: TODOS_DOWNLOAD,
    payload,
})