import React from 'react'
import { LinkVerifyStd } from '../VerifyStd'

const UserNotFound = () => {
  return (
    <p>
      Cant find user. Please create a new account on{' '}
      <LinkVerifyStd to='/register'>
        register page
      </LinkVerifyStd>
    </p>
  )
}

export default UserNotFound
