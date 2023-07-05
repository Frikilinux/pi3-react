import React from 'react'
import { HeaderStyled } from './HeaderStd'
import { useDispatch, useSelector } from 'react-redux'
import UserLoggedOut from '../Navbar/User/UseLoggedOut'
import UserLoggedIn from '../Navbar/User/UserLoggedIn'
import { hideCart } from '../../redux/cart/cartSlice'

export const Header = () => {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  return (
    <HeaderStyled>
      {user ? <UserLoggedIn /> : <UserLoggedOut />}
      <button onClick={() => dispatch(hideCart())}>CART</button>
    </HeaderStyled>
  )
}
