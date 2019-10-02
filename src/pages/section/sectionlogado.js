import React, { Component } from 'react'



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
    this.setState({ novaLista: e.target.value })
  }

  handlerSubmit = e => {
    e.preventDefault()
    this.setState({contador: 1+this.state.contador})
  }

  render() {
    return (
      <>  
      <h1>Lista de tarefas</h1>
      <form >
        <ul>
          {this.state.listas.map(todoList => <li key={todoList}>{todoList}</li>)}
        </ul>
        <input
          type='text'
          onChange={this.handlerChange}
          value={this.state.novaLista}
        >
        </input>
        <p>Você Clicou:{this.state.contador}</p>

         <button onClick={this.handlerSubmit}>Adicionar</button>
      </form>
       
      </>
    )
  }
};

export default Iniciar