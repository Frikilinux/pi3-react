import React from 'react'
import { HeaderStyled } from './HeaderStd'
import { useDispatch, useSelector } from 'react-redux'
import UserLoggedOut from '../Navbar/User/UseLoggedOut'
import UserLoggedIn from '../Navbar/User/UserLoggedIn'
import { toggleCart } from '../../redux/cart/cartSlice'
import Cart from '../Cart/Cart'
import { CartModal } from '../Cart/CartStd'

export const Header = () => {
  const isCartHidden = useSelector(({ cart }) => cart.hidden)
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  return (
    <HeaderStyled>
      {user ? <UserLoggedIn /> : <UserLoggedOut />}

      {!isCartHidden && (
        <CartModal
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ type: 'spring', damping: 18, duration: 0.1 }}
          key='cart'
        >
          <Cart />
        </CartModal>
      )}
    </HeaderStyled>
  )
}
