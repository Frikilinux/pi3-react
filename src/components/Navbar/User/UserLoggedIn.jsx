import React from 'react'
import {
  UserButtonsContainer,
  UserContainer,
  UserIconContainer,
  UserImg,
  UserImgContainer,
  UserNameData,
} from './UserLoginStyled'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../../redux/user/userSlice'
import { hideCart, toggleCart } from '../../../redux/cart/cartSlice'
import ButtonPrimary from '../../UI/Button/ButtonPrimary'
import Icons from '../../../constants/icons'
import { useLocation } from 'react-router-dom'

const UserLoggedIn = () => {
  const { Logout, CartIcon, UserIcon } = Icons
  const {
    user: { nombre },
    user: { email },
  } = useSelector(({ user }) => user)
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const firstName = nombre.split(' ').slice(0, 1).join(' ')
  return (
    <>
      <UserIconContainer>
        <UserIcon />
      </UserIconContainer>

      <UserContainer
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        key={'user-data'}
      >
        <UserImgContainer>
          <UserImg
            src={`https://robohash.org/${nombre}?set=set3`}
            alt={`Foto del usuario ${nombre}`}
          />
        </UserImgContainer>
        <UserNameData>
          <p>Hi, {firstName}</p>
          <p>{email}</p>
        </UserNameData>
        <UserButtonsContainer>
          <ButtonPrimary
            onClick={() => {
              dispatch(logOut())
              dispatch(hideCart())
            }}
          >
            <Logout />
          </ButtonPrimary>
          {pathname !== '/checkout' && (
            <ButtonPrimary onClick={() => dispatch(toggleCart())}>
              <CartIcon />
            </ButtonPrimary>
          )}
        </UserButtonsContainer>
      </UserContainer>
    </>
  )
}

export default UserLoggedIn
