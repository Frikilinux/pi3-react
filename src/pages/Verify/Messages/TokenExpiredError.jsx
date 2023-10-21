import React from 'react'
import { VerifyText } from '../VerifyStd'
import ButtonPrimary from '../../../components/UI/Button/ButtonPrimary'
import { useVerify } from '../../../hooks/useVerify'

const TokenExpiredError = ({ email, onClick }) => {
  return (
    <VerifyText>
      <p>Token expired. Please generate a new one for {email}</p>
      <ButtonPrimary onClick={onClick}>
        Send new verification email
      </ButtonPrimary>
    </VerifyText>
  )
}

export default TokenExpiredError
