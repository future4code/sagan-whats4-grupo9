import React from 'react';
import './App.css';
import List from './components/List'
import styled from 'styled-components';
import bg from './images/whats4bg.png'
import Formulario from './Components/Formulario/Formulario'

const Box = styled.div`
  display: grid;
  grid-template-rows: 1fr 40px;
  grid-template-columns: 1fr;
  width: 400px;
  max-width: 90vw;
  border: 1px solid grey;
  height: calc(100vh - 2px);
  margin: 0 auto;
  background-image: url(${bg});
`
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }

  onAddMessage = (usuario, mensagem) => {
    const msg = {
      user: usuario,
      message: mensagem
    }
    this.setState({
      messages: [...this.state.messages, msg]
    })
  } 

  onDoubleClick = (key) => {
    const messages = this.state.messages.filter (
      (value, index) => { return index !== key}
    )
    this.setState({
      messages:messages
    })
  }


  render() {
    return (
      <Box>
        <List items={this.state.messages} onDoubleClick={this.onDoubleClick}/>
        <Formulario clickBotao={this.onAddMessage}/>
      </Box>
    )
  }
}

export default App;
