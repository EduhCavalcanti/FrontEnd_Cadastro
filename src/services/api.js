import axios from 'axios'; //Importa o axios que vai fazer a conexão do front com a API

import {getToken} from './auth'

const api = axios.create({ //Sempre vai inicar com o local host correto
    baseURL: 'http://localhost:3333'
});

api.interceptors.request.use(async config =>{
    try {
        const token = getToken
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    } catch (error) {
        console.log(error)
    }
})

export default api;