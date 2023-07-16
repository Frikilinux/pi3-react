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

const UserLoggedIn = () => {
  const { Logout, Cart } = Icons
  const { nombre } = useSelector((state) => state.user.user)
  const dispatch = useDispatch()
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
        <ButtonPrimary onClick={() => dispatch(toggleCart())}>
          <Cart />
        </ButtonPrimary>
      </UserButtonsContainer>
    </UserContainer>
  )
}

export default UserLoggedIn
