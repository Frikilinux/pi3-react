import React from 'react'
import {
  UserModalConatiner,
  UserModalData,
  UserModalLogoutContainer,
} from './UserModalStd'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../../../redux/user/userSlice'
import { IconLogout } from '@tabler/icons-react'
import useButtons from '../../../../hooks/useButtons'

const UserModal = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(({ user }) => user)
  const { hideAllModals } = useButtons()

  return (
    <UserModalConatiner
      initial={{ translateX: 600 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: 600 }}
      transition={{ type: 'spring', damping: 18, duration: 0.1 }}
      key='user-modal'
    >
      <h2>{user?.name}</h2>
      <UserModalData>
        <NavLink  onClick={() => hideAllModals()} to={'/summary'}>Orders Summary</NavLink>
        <UserModalLogoutContainer>
          <NavLink onClick={() => dispatch(logOut())} to={'/'}>
            Logout
          </NavLink>
          <IconLogout color='var(--red)' />
        </UserModalLogoutContainer>
      </UserModalData>
    </UserModalConatiner>
  )
}

export default UserModal
