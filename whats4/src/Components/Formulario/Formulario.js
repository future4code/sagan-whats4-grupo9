import React from 'react';
import styled from 'styled-components'

const ContainerForm = styled.section`
    display: flex;
`

const Usuario = styled.input`
    width: 80px;
`

const Texto = styled.input`
    width: 100%;
`

const Enviar = styled.button`
    width: 50px;
`

class Formulario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: '',
            mensagem: ''
        }
    }



    render() {
        return (
            <ContainerForm>
                <Usuario onKeyDown={(event) => {
                    if (event.keyCode === 13) this.props.clickBotao(this.state.usuario, this.state.mensagem) }} 
                    value={this.state.usuario} onChange={(event) => { this.setState({ usuario: event.target.value })}} placeholder='Usuário'/>
                <Texto onKeyDown={(event) => {
                    if (event.keyCode === 13) this.props.clickBotao(this.state.usuario, this.state.mensagem) }} 
                value={this.state.mensagem} onChange={(event) => { this.setState({ mensagem: event.target.value })}} placeholder='Mensagem'/>
                <Enviar onClick={() => { this.props.clickBotao(this.state.usuario, this.state.mensagem) }}
                >Enviar
                </Enviar>
            </ContainerForm>
        )
    }
}

export default Formulario;