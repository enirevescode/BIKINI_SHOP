import router from '../router'

// eslint-disable-next-line no-unused-vars
export function authGuard(to){
    let token = localStorage.getItem('token')
        console.log(token)

        if(token){
            return true
        }

        router.push('/')
}