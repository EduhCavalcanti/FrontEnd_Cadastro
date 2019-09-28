import axios from 'axios'; //Importa o axios que vai fazer a conexão do front com a API

const api = axios.create({ //Sempre vai inicar com o local host correto
    baseURL: 'http://localhost:3333'
});

export default api;