export const TOKEN_KEY = "@cadastro-token";
export const isAuthenticad = () => localStorage.getItem(TOKEN_KEY) != null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token =>{
    localStorage.setItem(TOKEN_KEY, token)
} 