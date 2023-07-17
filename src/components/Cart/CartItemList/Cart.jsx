import React from 'react'
import { CartContainer, ItemsContainer } from './CartStd'
import { CartItem } from '../CartItem/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const Cart = () => {
  const { items } = useSelector((state) => state.cart)
  const dispatch = useDispatch()



  return (
    <CartContainer>
      <ItemsContainer items={items.length}>
        {items.length ? (
          items.map((item) => <CartItem key={item.id} {...item} />)
        ) : (
          <p>Comprá algo loco</p>
        )}
      </ItemsContainer>
    </CartContainer>
  )
}

export default Cart
