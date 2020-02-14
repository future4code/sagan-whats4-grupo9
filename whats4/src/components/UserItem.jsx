import React from 'react'
import styled from 'styled-components'
import props from 'prop-types'

const Li = styled.li`
  list-style: none;
  background-color: #DCF8C6;
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  :after{
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 0.75em solid transparent;
    border-left-color: #DCF8C6;
    border-right: 0;
    border-bottom: 0;
    margin-top: -0.375em;
    margin-right: -0.75em;
  }
  min-height: 25px;
`

const Message = styled.span`
  font-size: 0.9rem;
  color: black;
`

class UserItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { message } = this.props;
    return (
      <Li>
        <Message>{message}</Message>
      </Li>
    )
  }
}

UserItem.propTypes = {
  message: props.string.isRequired
}

export default UserItem