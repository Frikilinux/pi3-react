import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonPrimary from '../../../components/UI/Button/ButtonPrimary'
import { useVerify } from '../../../hooks/useVerify'
import { setUserError } from '../../../redux/user/userSlice'
import { ResponseMessages } from '../LoginStd'

const NotVerified = () => {
  const dispatch = useDispatch()
  const { userError } = useSelector(({ user }) => user)
  const { genVerifyToken, fetching } = useVerify()

  return (
    <ResponseMessages>
      <p>The email {userError?.data.email} are not verified.</p>
      <p>
        Please check your email and follow the verification link or send a new
        one
      </p>

      <ButtonPrimary
        onClick={async () => {
          await genVerifyToken(userError?.data.email)
          dispatch(setUserError(false))
        }}
        fetching={fetching}
        disabled={fetching}
      >
        Send verification email
      </ButtonPrimary>
    </ResponseMessages>
  )
}

export default NotVerified
