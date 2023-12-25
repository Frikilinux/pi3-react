import React from 'react'
import ButtonPrimary from '../../../components/UI/Button/ButtonPrimary'
import { MsgText } from './MsgStd'

const TokenExpiredError = ({ email, onClick }) => {
  return (
    <MsgText>
      <p>Token expired. Please generate a new one for {email}</p>
      <ButtonPrimary onClick={onClick}>
        Send new verification email
      </ButtonPrimary>
    </MsgText>
  )
}

export default TokenExpiredError
