import React from 'react'
import { Menu, Sidebar, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import itemReducer from '../reducers/itemReducer'

const CartItems = ({cartVisible, userCart, total, removeFromCart}) => {
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
      {userCart.map(item => {
      return(
        <Menu.Item as='a'>
          {item.name}
          <Button 
            style={{padding: "1px", margin: "10px"}}
            onClick={removeFromCart.bind(this, item)}
          
          >Remove</Button>
        </Menu.Item>
      )
    })}
      {/* <Menu.Item as='a' header>
        My Cart
      </Menu.Item>
      <Menu.Item as='a'>cart item</Menu.Item>
      <button>Add/Remove</button>
      <Menu.Item as='a'>cart item</Menu.Item>
      <button>Add/Remove</button>
      <Menu.Item as='a'>cart item</Menu.Item>
      <button>Add/Remove</button>
      <Menu.Item as='a'>cart item</Menu.Item>
      <button>Add/Remove</button> */}
      <hr />
      <Menu.Item>
        Total: {total}
      </Menu.Item>
      <Button className="circular fluid large ui yellow button"><Link to='/My_Cart'>Checkout <span class="sr-only">(current)</span></Link></Button>
    </Sidebar>
  )
}

export default CartItems