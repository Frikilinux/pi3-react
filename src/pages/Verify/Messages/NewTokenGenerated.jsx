import React from 'react'
import { VerifyText } from '../VerifyStd'
import { Link } from 'react-router-dom'

const NewTokenGenerated = ({ email }) => {
  return (
    <VerifyText>
      <p>New verification email was sent to {email}.</p>
      <p>Please check your email and follow the verification link.</p>

      <p>
        After that you can <Link to='/login'>login</Link>.
      </p>
    </VerifyText>
  )
}

export default NewTokenGenerated
