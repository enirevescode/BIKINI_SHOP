/* gestion des token, connexion*/
import Axios from './caller.service'

let login = (Credentials) => {
    return Axios.post('/auth/LoginView', Credentials)
}
let logout = () => {
    localStorage.removeItem('token')
}

let getToken = () => {
    return localStorage.getItem('token')
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}
export const accountService = {
    login,
    logout,
    saveToken,
    getToken,
    isLogged
}