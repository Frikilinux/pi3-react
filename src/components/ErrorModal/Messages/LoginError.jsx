import React from 'react'
import { ResponseMessages } from '../LoginStd'

const LoginError = () => {
  return (
    <ResponseMessages>
      <p>An unknown error occurred while logging in.</p>
      <p>Please try again later</p>
    </ResponseMessages>
  )
}

export default LoginError
