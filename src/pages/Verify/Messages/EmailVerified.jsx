import React from 'react'
import { VerifyText } from '../VerifyStd'
import { Link } from 'react-router-dom'

const EmailVerified = ({ email }) => {
  return (
    <VerifyText>
      <p>Email {email} verified.</p>
      <p>
        You can now <Link to='/login'>login</Link>.{' '}
      </p>
      <p>Enjoy the music.</p>
    </VerifyText>
  )
}

export default EmailVerified
