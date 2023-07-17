import React from 'react'
import { useDispatch } from 'react-redux'
import { cleanCart } from '../../../redux/cart/cartSlice'
import { CartButtonsContainer } from './CartButtonsStd'

const CartButtons = () => {
const dispatch = useDispatch()

  return (
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
  )
}

export default CartButtons
