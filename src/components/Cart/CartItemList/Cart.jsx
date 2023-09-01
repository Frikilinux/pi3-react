import React from 'react'
import { CartContainer, ItemsContainer } from './CartStd'
import { CartItem } from '../CartItem/CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {
  const { items } = useSelector((state) => state.cart)

  return (
    <CartContainer>
      <ItemsContainer items={items?.length}>
        {items?.length ? (
          items?.map((item) => <CartItem key={item.id} {...item} />)
        ) : (
          <p>Buy something please</p>
        )}
      </ItemsContainer>
    </CartContainer>
  )
}

export default Cart
