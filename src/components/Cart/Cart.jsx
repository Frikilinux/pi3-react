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

  const totalPrice = items.reduce((acc, item) => {
    acc += item.price * item.qty
    return acc
  }, 0).toFixed(2)

  return (
    <CartContainer>
      <ItemsContainer items={items.length}>
        {items.length ? (
          items.map((item) => <CartItem key={item.id} {...item} />)
        ) : (
          <p>Comprá algo loco</p>
        )}
      </ItemsContainer>
      <PricesContainer>
        <p>Tenés, {items.length} Albums en el carro!</p>
        <p>Subtotal ------------- {totalPrice}</p>
        <p>Descuentos ------------- 0.00</p>
        <p>Total ------------- {totalPrice}</p>
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
