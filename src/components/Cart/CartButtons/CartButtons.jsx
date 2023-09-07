import React from 'react'
import { useDispatch } from 'react-redux'
import { cleanCart, hideCart } from '../../../redux/cart/cartSlice'
import { CartButtonsContainer } from './CartButtonsStd'
import ButtonPrimary from '../../UI/Button/ButtonPrimary'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import {
  IconShoppingCartCancel,
  IconShoppingCartCheck,
} from '@tabler/icons-react'

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
        <IconShoppingCartCheck size={20} />
        <p style={{ marginLeft: '5px' }}>Checkout</p>
      </ButtonPrimary>
      <ButtonPrimary
        onClick={() => {
          dispatch(cleanCart())
          toast.success('Cart cleaned')
        }}
      >
        <IconShoppingCartCancel size={20} />
        <p style={{ marginLeft: '5px' }}>Clean Cart</p>
      </ButtonPrimary>
    </CartButtonsContainer>
  )
}

export default CartButtons
