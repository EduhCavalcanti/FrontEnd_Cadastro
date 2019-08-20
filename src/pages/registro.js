import React from 'react'
import '../pages/registro.css'

export default function Registrar(){
    return(
        <div className="box-todo">
            <form>
                <h1>Registra-se</h1>
                <div className='box-user'>
                    <label>Digite seu nome:</label>
                    <input type='text' placeholder='Digite seu nome'></input>
                </div>

                <div className='box-email'>
                    <label>Digite seu Email:</label>
                    <input type='text' 
                    placeholder='Digite seu Email'></input>
                </div>
                
                <div className='box-pass'>
                    <label>Digite uma senha:</label>
                    <input type='password' placeholder='Digite uma senha'></input>
                </div>

                <div className='box-button1'>
                    <button>Registre-se</button>
                </div>
            </form>
        </div>
    )
}