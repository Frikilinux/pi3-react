import React from 'react'
import { CartContainer } from './CartStd'
import { CartItem } from './CartItem/CartItem'

const Cart = () => {
  return <CartContainer>
    <CartItem />
    <CartItem />
    <CartItem />
  </CartContainer>
}

export default Cart
