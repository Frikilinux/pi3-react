import React from 'react'
import { UserModalConatiner } from './UserModalStd'
import { useNavigate, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../../../redux/user/userSlice'

const UserModal = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(({ user }) => user)

  return (
    <UserModalConatiner>
      <h2>{user?.nombre}</h2>
      <NavLink to={'/summary'}>Orders Summary</NavLink>
      <NavLink onClick={() => dispatch(logOut())} to={'/summary'}>
        Logout
      </NavLink>
    </UserModalConatiner>
  )
}

export default UserModal
