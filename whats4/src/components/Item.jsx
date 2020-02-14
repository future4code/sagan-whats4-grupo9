import React from 'react'
import styled from 'styled-components'
import props from 'prop-types'

const Li = styled.li`
  list-style: none;
  background-color: white;
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  :after{
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 0.75rem solid transparent;
    border-right-color: #fff;
    border-left: 0;
    border-bottom: 0;
    margin-top: -0.375rem;
    margin-left: -0.75rem;
  }
  min-height: 35px;
`

const User = styled.span`
  font-weight: bolder;
  font-size: 1.1rem;
  color: lightgreen;
  font-style: italic;
`
const Message = styled.span`
  font-size: 0.9rem;
  color: darkgray;
`

class Item extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { user, message } = this.props;
    return (
      <Li>
        <User>{user}</User>
        <Message>{message}</Message>
      </Li>
    )
  }
}

Item.propTypes = {
  user: props.string.isRequired,
  message: props.string.isRequired
}

export default Item