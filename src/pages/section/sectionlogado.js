import React, { Component } from 'react'

import './style.css'

class Iniciar extends Component {
  //Estado incial
  state = {
    //Vou adicionar um variável vazia mas que vai receber dados do input
    novaLista: '',
    //Criar um estado inicial de arrays
    listas: [
      'Node',
      'Express',
      'React'
    ],
    contador: 0,
  }
  
  //Criando método que vai fazer acontecer quando digitar no input
  handlerChange = e => {
   
  }

  handlerSubmit = e => {
    e.preventDefault();
    
  }

  render() {
    return (
      <>  
      <h1>Adicione uma foto ao seu perfil</h1>
      <form onSubmit={this.handlerSubmit}>
        
        <input 
          type="file" 
          name="foto" 
          id="foto"
          onChange={this.handlerChange}
          />
        <button type="submit">Adicionar foto</button>
      </form>
       
      </>
    )
  }
};

export default Iniciar