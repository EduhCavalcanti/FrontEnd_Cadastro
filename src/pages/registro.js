import React, {useState} from 'react'
import '../pages/registro.css'
import api from '../services/api'


export default function Registrar({history}){
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

   async function handlerSubmit(e){
        e.preventDefault()
    try{    
    const response = await api.post('/register',{
        name:userName,
        email:userEmail,
        password:userPassword
    })
    console.log(response)
    //history.push('/logado')
    }catch(err){
        console.log("Algo deu errado")
    }
}


    return(
        <div className="box-todo">
            <form onSubmit={handlerSubmit}>
                <h1>Registra-se</h1>
                <div className='box-user'>
                    <label>Digite seu nome:</label>
                    <input type='text' placeholder='Digite seu nome'
                           value={userName}
                           onChange={e => setUserName(e.target.value)}
                           required
                    ></input>
                </div>

                <div className='box-email'>
                    <label>Digite seu Email:</label>
                    <input type='text' 
                            placeholder='Digite seu Email'
                            value={userEmail}
                            onChange={e => setUserEmail(e.target.value)}
                            required
                            >
                    </input>            
                </div>
                
                <div className='box-pass'>
                    <label>Digite uma senha:</label>
                    <input type='password' 
                            placeholder='Digite uma senha'
                            value={userPassword}
                            onChange={e => setUserPassword(e.target.value)}
                            required
                            >
                    </input>
                </div>

                <div className='box-button1'>
                    <button 
                            type='Submit'> Registrar
                            
                    </button>
                </div>
            </form>
        </div>
    )
}