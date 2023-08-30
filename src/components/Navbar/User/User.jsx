import React from 'react'
import { UserContainer, UserIconContainer } from './UserLoginStd'
import { useNavigate } from 'react-router-dom'
import ButtonPrimary from '../../UI/Button/ButtonPrimary'
import { IconUser } from '@tabler/icons-react'
import { useSelector } from 'react-redux'

const UserLoggedOut = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)
  return (
    <>
      <UserIconContainer>
        <IconUser onClick={() => !user && navigate('/login')} />
      </UserIconContainer>
      <UserContainer
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        key={'user-login'}
      >
        <ButtonPrimary onClick={() => navigate('/login')}>LogIn</ButtonPrimary>
      </UserContainer>
    </>
  )
}

export default UserLoggedOut
