import React from 'react'
import { LinkMsgStd, MsgText } from './MsgStd'

const EmailAlreadyVerified = () => {
  return (
    <MsgText>
      The email is already verified. you can go to the
      <LinkMsgStd to='/login'>login page</LinkMsgStd>
    </MsgText>
  )
}

export default EmailAlreadyVerified
