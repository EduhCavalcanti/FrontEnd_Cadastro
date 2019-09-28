import React, { useState } from 'react'
import '../pages/login.css'
//import api from '../services/api' // exportando a api para fazer conexão com o backEnd


function Login({history}) {//Componente login
  const [userName, setUserName] = useState('') // Usando useState iniciado com valor vazio
      // O useState retorna 2 valores, o userName e uma função => setUserName()
      //Para acessar o userName usa userName, para mudar o valor do userName utiliza SetUserName()
    //***************************************************************** */
  const [userPassword, setUserPassword] = useState('')//Vou pegar a senha agora  

      //Vou criar uma funçao de quando o usuário for enviar o form
      function handleSubmit(e){//Vai receber um evento 
        e.preventDefault() //Vai previnir de redirecionar a página para outra e vai bloquear 
        
        console.log(userName, userPassword)//Vai retonar o que o usuário escrever

        history.push('/logado')
      }

      function handleClick(e){ // Função que quando clica no button "Registrar " levar pra rota de registro
        e.preventDefault()
        history.push('/register')//Leva pra essa rota
      }

  return (


    <div className='box-login'>

      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='box-text'>
            <input type='text' 
                  placeholder='Digite seu login'
                  value={userName} //Passando o valor vazio com a variável criada la em cima
                  onChange={e => setUserName(e.target.value)} //Vai passar um "e" de evento com uma função 
                                  //Vai pegar o valor que ele vai digitar no input e passar pra função do setUserName
                  required
                  >
            </input>
        </div>

        <div className='box-senha'>
          <input
            type='password'
            placeholder='Digite sua senha'
            value={userPassword}
            onChange={e => setUserPassword(e.target.value)}
            required
            >
          </input>
        </div>

        <div className='box-button'>
          <button type="submit">
            Logar
          </button>

          <button onClick={handleClick}>
            Registrar
          </button>
        </div>
      </form>

    </div>
  )
}
export default Login