import React from 'react'
import {
  UserContainer,
  UserImg,
  UserNameData,
  UswrImgContainer,
} from './UserLoginStyled'

const UserLogin = ({ image, firstName, lastName, username }) => {
  return (
    <UserContainer>
      <UswrImgContainer>
        <UserImg
          src={image}
          alt={`Foto del usuario ${firstName} ${lastName}`}
        />
      </UswrImgContainer>
      <UserNameData>
        <p>Hi!, {firstName}</p>
        <p>@{username}</p>
      </UserNameData>
    </UserContainer>
  )
}

export default UserLogin
