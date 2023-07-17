import React from 'react'
import {
  UserButtonsContainer,
  UserContainer,
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
  const { Logout, CartIcon } = Icons
  const { nombre } = useSelector((state) => state.user.user)
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  return (
    <UserContainer
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <UserImgContainer>
        <UserImg
          src={`https://robohash.org/${nombre}?set=set3`}
          alt={`Foto del usuario ${nombre}`}
        />
      </UserImgContainer>
      <UserNameData>
        <p>Hi, {nombre}</p>
        <p>@{nombre}</p>
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
  )
}

export default UserLoggedIn
