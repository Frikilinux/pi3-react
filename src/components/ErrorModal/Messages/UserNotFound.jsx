import React from 'react'
import { LinkMsgStd } from './MsgStd'

const UserNotFound = () => {
  return (
    <p>
      Cant find user. Please create a new account on{' '}
      <LinkMsgStd to='/register'>register page</LinkMsgStd>
    </p>
  )
}

export default UserNotFound
