import React from 'react'
import UserLogin from '../Navbar/User/UserLogin'
import users from '../../data/users.json'
import { HeaderStyled } from './HeaderStld'

export const Header = () => {
  return (
    <HeaderStyled>
      <UserLogin {...users.users[20]} />
    </HeaderStyled>
  )
}
