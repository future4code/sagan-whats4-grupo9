import React from 'react';
import PropTypes from 'prop-types';
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
    }

    render() {
        return (
            <ContainerForm>
                <Usuario value={this.props.usuario} placeholder='Usuário'/>
                <Texto value={this.props.texto} placeholder='Mensagem'/>
                <Enviar>Enviar</Enviar>
            </ContainerForm>
        )
    }
}

Formulario.propTypes = {
    usuario: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired
}

export default Formulario;