import React from 'react'
import { LinkMsgStd, MsgText } from './MsgStd'

const EmailVerified = ({ email }) => {
  return (
    <MsgText>
      <p>Email {email} verified.</p>
      <p>
        You can now <LinkMsgStd to='/login'>login</LinkMsgStd>.{' '}
      </p>
      <p>Enjoy the music.</p>
    </MsgText>
  )
}

export default EmailVerified
