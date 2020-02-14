import React from 'react';
import './App.css';
import List from './components/List'
import styled from 'styled-components';
import bg from './images/whats4bg.png'

const Box = styled.div`
  display: grid;
  grid-template-rows: 80% 20%;
  grid-template-columns: 100%;
  width: 400px;
  max-width: 90vw;
  border: 1px solid grey;
  height: calc(100vh - 2px);
  margin: 0 auto;
  background-image: url(${bg});
`
const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [
        { user: "Alfnori", message: "Teste do Dofo" },
        { user: "AdaniConelari", message: "Teste do Nadia" },
        { user: "Skywalker", message: "Teste do Luke" },
      ]
    }

  }
  render() {
    return (
      <Box>
        <List items={this.state.messages} />
        <Form>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </Form>
      </Box>
    )
  }
}

export default App;
