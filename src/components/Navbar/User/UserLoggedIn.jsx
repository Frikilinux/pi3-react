import React from 'react'
import {
  UserContainer,
  UserImg,
  UserImgContainer,
  UserNameData,
} from './UserLoginStyled'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../../redux/user/userSlice'

const UserLoggedIn = () => {
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
        <p>Hola, {nombre}</p>
        <p>@{nombre}</p>
      </UserNameData>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </UserContainer>
  )
}

export default UserLoggedIn
