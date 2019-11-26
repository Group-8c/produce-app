import React from 'react'
import { Menu, Sidebar, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const CartItems = ({cartVisible}) => {
  return (
    <Sidebar
      as={Menu}
      animation='overlay'
      direction='right'
      inverted
      vertical
      visible={cartVisible}
    >
      <Menu.Item as='a' header>
        My Cart
      </Menu.Item>
      <Menu.Item as='a'>cart item</Menu.Item>
      <button>Add/Remove</button>
      <Menu.Item as='a'>cart item</Menu.Item>
      <button>Add/Remove</button>
      <Menu.Item as='a'>cart item</Menu.Item>
      <button>Add/Remove</button>
      <Menu.Item as='a'>cart item</Menu.Item>
      <button>Add/Remove</button>
      <hr />
      <Button className="circular fluid large ui yellow button"><Link to='/My_Cart'>Checkout <span class="sr-only">(current)</span></Link></Button>
    </Sidebar>
  )
}

export default CartItems