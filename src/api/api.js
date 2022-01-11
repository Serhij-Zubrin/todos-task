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
    async getTodos() {
        return await instance.get(`todos`, header)
    },
}