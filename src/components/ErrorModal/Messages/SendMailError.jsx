import React from 'react'
import { MsgText } from './MsgStd'

const SendMailError = () => {
  return (
    <MsgText>
      <p>Error sending email.</p>
      <p>Please, try again later</p>
    </MsgText>
  )
}

export default SendMailError
