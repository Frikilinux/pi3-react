import React from 'react'
import { HeaderStyled } from './HeaderStd'
import { useSelector } from 'react-redux'
import UserLoggedOut from '../Navbar/User/UseLoggedOut'
import UserLoggedIn from '../Navbar/User/UserLoggedIn'

export const Header = () => {
  const { user } = useSelector((state) => state.user)
  return (
    <HeaderStyled>
      {user ? <UserLoggedIn {...user} /> : <UserLoggedOut />}
    </HeaderStyled>
  )
}
