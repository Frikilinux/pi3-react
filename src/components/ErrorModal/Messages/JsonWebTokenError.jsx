import React from 'react'
import { LinkVerifyStd, VerifyText } from '../VerifyStd'

const JsonWebTokenError = () => {
  return (
    <VerifyText>
      We cant verify your token, please go to the
      <LinkVerifyStd to='/login'>login page</LinkVerifyStd> and try to generate
      a new one.
    </VerifyText>
  )
}

export default JsonWebTokenError
