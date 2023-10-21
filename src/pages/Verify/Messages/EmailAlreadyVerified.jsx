import React from 'react'
import { LinkVerifyStd } from '../VerifyStd'

const EmailAlreadyVerified = () => {
  return (
    <div>
      The email is already verified. you can go to the
      <LinkVerifyStd to='/login'>login page</LinkVerifyStd>
    </div>
  )
}

export default EmailAlreadyVerified
