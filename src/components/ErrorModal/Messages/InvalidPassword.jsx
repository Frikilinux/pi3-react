import React from 'react'
import { MsgText } from './MsgStd'

const InvalidPassword = () => {
  return (
    <MsgText>
      <p>The password you entered is incorrect.</p>
      <p>If you forgot your password, please reset it.</p>
    </MsgText>
  )
}

export default InvalidPassword
