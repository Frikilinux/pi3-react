import React from 'react'
import { HeaderStyled } from './HeaderStd'
import { useDispatch, useSelector } from 'react-redux'
import UserLoggedOut from '../Navbar/User/UseLoggedOut'
import UserLoggedIn from '../Navbar/User/UserLoggedIn'
import { hideCart } from '../../redux/cart/cartSlice'

export const Header = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  return (
    <HeaderStyled>
      {user ? <UserLoggedIn {...user} /> : <UserLoggedOut />}
      <button onClick={() => dispatch(hideCart())}>CART</button>
    </HeaderStyled>
  )
}
