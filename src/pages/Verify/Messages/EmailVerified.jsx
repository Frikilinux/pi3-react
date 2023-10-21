import React from 'react'
import { LinkVerifyStd, VerifyText } from '../VerifyStd'

const EmailVerified = ({ email }) => {
  return (
    <VerifyText>
      <p>Email {email} verified.</p>
      <p>
        You can now <LinkVerifyStd to='/login'>login</LinkVerifyStd>.{' '}
      </p>
      <p>Enjoy the music.</p>
    </VerifyText>
  )
}

export default EmailVerified
