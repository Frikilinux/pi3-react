import React from 'react'
import { useDispatch } from 'react-redux'
import { cleanCart, hideCart } from '../../../redux/cart/cartSlice'
import { CartButtonsContainer } from './CartButtonsStd'
import ButtonPrimary from '../../UI/Button/ButtonPrimary'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const CartButtons = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <CartButtonsContainer>
      <ButtonPrimary
        onClick={() => {
          navigate('/checkout')
          dispatch(hideCart())
        }}
      >
        Checkout
      </ButtonPrimary>
      <ButtonPrimary
        onClick={() => {
          dispatch(cleanCart())
          toast.info('Cart cleaned')
        }}
      >
        Clean Cart
      </ButtonPrimary>
    </CartButtonsContainer>
  )
}

export default CartButtons
