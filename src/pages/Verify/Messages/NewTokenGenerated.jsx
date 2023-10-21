import React from 'react'
import { LinkVerifyStd, VerifyText } from '../VerifyStd'

const NewTokenGenerated = ({ email }) => {
  return (
    <VerifyText>
      <p>New verification email was sent to {email}.</p>
      <p>Please check your email and follow the verification link.</p>

      <p>
        After that you can <LinkVerifyStd to='/login'>login</LinkVerifyStd>.
      </p>
    </VerifyText>
  )
}

export default NewTokenGenerated
