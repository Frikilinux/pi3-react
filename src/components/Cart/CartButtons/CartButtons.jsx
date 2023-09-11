import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  const { items } = useSelector(({ cart }) => cart)

  return (
    <CartButtonsContainer>
      <ButtonPrimary
        disabled={items.length === 0}
        onClick={() => {
          if (items.length === 0) return
          navigate('/checkout')
          dispatch(hideCart())
          window.scrollTo(0, 0)
        }}
      >
        <IconShoppingCartCheck size={20} />
        <p style={{ marginLeft: '5px' }}>Checkout</p>
      </ButtonPrimary>
      <ButtonPrimary
        disabled={items.length === 0}
        onClick={() => {
          if (items.length === 0) return
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
