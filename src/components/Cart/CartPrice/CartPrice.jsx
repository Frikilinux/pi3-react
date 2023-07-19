import React from 'react'
import { useSelector } from 'react-redux'
import { PricesContainer } from './CartPriceStd'

const CartPrice = () => {
  const { items } = useSelector((state) => state.cart)
  const totalPrice = items
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2)

  return (
    <PricesContainer>
      <p>Tenés, {items.length} Albums en el carro!</p>
      <p>Subtotal ------------- {totalPrice}</p>
      <p>Descuentos ------------- 0.00</p>
      <p>Total ------------- {totalPrice}</p>
    </PricesContainer>
  )
}

export default CartPrice


