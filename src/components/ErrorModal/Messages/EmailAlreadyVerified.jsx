import React from 'react'
import { LinkVerifyStd, VerifyText } from '../VerifyStd'

const EmailAlreadyVerified = () => {
  return (
    <VerifyText>
      The email is already verified. you can go to the
      <LinkVerifyStd to='/login'>login page</LinkVerifyStd>
    </VerifyText>
  )
}

export default EmailAlreadyVerified
