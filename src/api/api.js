import axios from "axios";
import { authHeader } from './auth-header.js'

const header = authHeader();
const instance = axios.create({
    baseURL: 'https://learnwebauthn-vb5r9.ondigitalocean.app/api/',
})

export const authAPI = {
    async authLogIn(data) {
        return await instance.post(`users/login`, data)
    },
    async authLogOut() {
        return await instance.get(`users/logout`);
    }
}

export const todosAPI = {
    async setTodos() {
        return await instance.get(`todos`, header)
    },

    async addTodo(body) {
        return await instance.post(`todos`, body, header)
    },

    async deleteTodo(id) {
        return await instance.delete(`todos?id=${id}`, header)
    },

    async changeTodo(id, body) {
        return await instance.put(`todos?id=${id}`, body, header)
    },

    async chooseTodo(id) {
        return await instance.get(`todos?id=${id}`, header)
    },
}