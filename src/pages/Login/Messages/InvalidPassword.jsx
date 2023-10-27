import React from 'react'
import { ResponseMessages } from '../LoginStd'

const InvalidPassword = () => {
  return (
    <ResponseMessages>
      <p>The password you entered is incorrect.</p>
      <p>If you forgot your password, please reset it.</p>
    </ResponseMessages>
  )
}

export default InvalidPassword
