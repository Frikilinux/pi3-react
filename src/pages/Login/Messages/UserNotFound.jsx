import React from 'react'
import { ResponseMessages } from '../LoginStd'

const UserNotFound = () => {
  return (
    <ResponseMessages>
      <p> Could not find user.</p>
      <p> Please verify your email or create a new account.</p>
    </ResponseMessages>
  )
}

export default UserNotFound
