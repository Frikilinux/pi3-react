import React from 'react'
import ButtonPrimary from '../../UI/Button/ButtonPrimary'
import { MsgText } from './MsgStd'
import { useSelector } from 'react-redux'

const ResetPassTokenExpiredError = ({ email, onClick }) => {
  const { fetchingUser } = useSelector(({ user }) => user)

  return (
    <MsgText>
      <p>Token expired. Please generate a new one for {email}</p>
      <ButtonPrimary
        disabled={fetchingUser}
        fetching={fetchingUser}
        onClick={onClick}
      >
        {fetchingUser ? 'Sending reset mail...' : `Send reset to ${email}`}
      </ButtonPrimary>
    </MsgText>
  )
}

export default ResetPassTokenExpiredError
