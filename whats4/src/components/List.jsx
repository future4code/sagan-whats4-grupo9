import React from 'react'
import styled from 'styled-components'
import props from 'prop-types'
import Item from './Item'
import UserItem from './UserItem'

const Ul = styled.ul`
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 0;
`

class List extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <Ul>
          {this.props.items.map((value, index) => {
            let Tag = Item

            if (value.user && value.user.toLowerCase() === "eu") {
              Tag = UserItem
            }
            return (
              <Tag key={index} user={value.user} message={value.message} />
            )
          })}
        </Ul>
    )
  }
}

List.propTypes = {
  items: props.array.isRequired
}

export default List 