import React from 'react'
import {
  UserContainer,
  UserImg,
  UserNameData,
  UswrImgContainer,
} from './UserLoginStyled'
import { useDispatch } from 'react-redux'
import { logOut } from '../../../redux/user/userSlice'

const UserLogin = ({ image, firstName, lastName, username }) => {
  const dispatch = useDispatch()
  return (
    <UserContainer>
      <UswrImgContainer>
        <UserImg
          src={image}
          alt={`Foto del usuario ${firstName} ${lastName}`}
        />
      </UswrImgContainer>
      <UserNameData>
        <p>Hola, {firstName}</p>
        <p>@{username}</p>
      </UserNameData>
      <button onClick={() => dispatch(logOut()) }>Logout</button>
    </UserContainer>
  )
}

export default UserLogin
