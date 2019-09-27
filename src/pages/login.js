import React from 'react'
import '../pages/login.css'


function Login(){//Componente login
   

    return(
    
        
        <div className='box-login'>
     
            <form>
                <h1>Login</h1>
                    <div className='box-text'>
                        <input type='text' placeholder='Digite seu login'></input>
                    </div>
                    
                    <div className='box-senha'>
                        <input 
                            type='password' 
                            placeholder='Digite sua senha'>
                        </input>
                    </div>

                    <div className='box-button'>
                        <button type="submit">
                            Logar 
                        </button>
                        
                        <button>
                                Registrar
                        </button>
                    </div>
            </form>

        </div>
    )
}
export default Login