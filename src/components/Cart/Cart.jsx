import React from 'react'
import {
  CartButtonsContainer,
  CartContainer,
  ItemsContainer,
  PricesContainer,
} from './CartStd'
import { CartItem } from './CartItem/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { cleanCart } from '../../redux/cart/cartSlice'

const Cart = () => {
  const { items } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <CartContainer>
      <ItemsContainer items={items.length}>
        {items.length
          ? items.map((item) => <CartItem key={item.id} {...item} />)
          : <p>Comprá algo loco</p> }
      </ItemsContainer>
      <PricesContainer>
        <p>Tenés, {items.length} Albums en el carro!</p>
        <p>Subtotal ------------- 0.00</p>
        <p>Descuentos ------------- 0.00</p>
        <p>Total ------------- 0.00</p>
      </PricesContainer>
      <CartButtonsContainer>
        <button>BUY</button>
        <button
          onClick={() => {
            dispatch(cleanCart())
          }}
        >
          Clean Cart
        </button>
      </CartButtonsContainer>
    </CartContainer>
  )
}

export default Cart
