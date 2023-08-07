import React from 'react'
import { UserContainer } from './UserLoginStyled'
import { useNavigate } from 'react-router-dom'
import ButtonPrimary from '../../UI/Button/ButtonPrimary'

const UserLoggedOut = () => {
  const navigate = useNavigate()
  return (
    <UserContainer
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      key={'user-login'}
    >
      <ButtonPrimary onClick={() => navigate('/login')}>LogIn</ButtonPrimary>
    </UserContainer>
  )
}

export default UserLoggedOut
