import React from 'react'
import { MsgText } from './MsgStd'

const MsgError = () => {
  return (
    <MsgText>
      <p>An unknown error occurred while logging in.</p>
      <p>Please try again later</p>
    </MsgText>
  )
}

export default MsgError
