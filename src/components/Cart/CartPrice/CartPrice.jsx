import React from 'react'
import { useSelector } from 'react-redux'
import { CartTotalPriceContainer, PricesContainer } from './CartPriceStd'

const CartPrice = () => {
  const { items } = useSelector((state) => state.cart)
  const totalPrice = items
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2)

  return (
    <PricesContainer>
      <p>{items.length || 'No'} Albums in the cart</p>
      <CartTotalPriceContainer>
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </CartTotalPriceContainer>
    </PricesContainer>
  )
}

export default CartPrice
