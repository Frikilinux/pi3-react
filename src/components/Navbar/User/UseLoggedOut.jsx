import React from 'react'
import { UserContainer } from './UserLoginStyled'

const UserLoggedOut = () => {
  return (
    <UserContainer
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      Iniciar sesión
    </UserContainer>
  )
}

export default UserLoggedOut
