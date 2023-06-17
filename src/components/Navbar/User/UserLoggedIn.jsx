import React from 'react'
import {
  UserContainer,
  UserImg,
  UserImgContainer,
  UserNameData,
} from './UserLoginStyled'
import { useDispatch } from 'react-redux'
import { logOut } from '../../../redux/user/userSlice'

const UserLoggedIn = ({ image, firstName, lastName, username }) => {
  const dispatch = useDispatch()
  return (
    <UserContainer
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <UserImgContainer>
        <UserImg
          src={`https://robohash.org/${username}?set=set3`}
          alt={`Foto del usuario ${firstName} ${lastName}`}
        />
      </UserImgContainer>
      <UserNameData>
        <p>Hola, {firstName}</p>
        <p>@{username}</p>
      </UserNameData>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </UserContainer>
  )
}

export default UserLoggedIn
