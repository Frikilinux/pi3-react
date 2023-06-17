import React from 'react'
import UserLogin from '../Navbar/User/UserLogin'
import { HeaderStyled } from './HeaderStld'
import { useSelector } from 'react-redux'

export const Header = () => {
  const { user } = useSelector((state) => state.user)
  return (
    <HeaderStyled>
      {user ? <UserLogin {...user} /> : 'PLEASE LOGIN'}
    </HeaderStyled>
  )
}
