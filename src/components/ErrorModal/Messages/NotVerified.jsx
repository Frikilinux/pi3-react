import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonPrimary from '../../../components/UI/Button/ButtonPrimary'
import { useVerify } from '../../../hooks/useVerify'
import { setUserError } from '../../../redux/user/userSlice'
import { MsgText } from './MsgStd'
import { useNavigate } from 'react-router-dom'

const NotVerified = () => {
  const dispatch = useDispatch()
  const { userError } = useSelector(({ user }) => user)
  const { genVerifyToken, fetching } = useVerify()
  const navigate = useNavigate()

  return (
    <MsgText>
      <p>The email {userError?.data.email} are not verified.</p>
      <p>
        Please check your email and follow the verification link or send a new
        one
      </p>

      <ButtonPrimary
        onClick={async () => {
          const res = await genVerifyToken(userError?.data.email)
          if (res) {
            dispatch(setUserError(false))
            navigate('/login')
          }
        }}
        fetching={fetching}
        disabled={fetching}
      >
        Send verification email
      </ButtonPrimary>
    </MsgText>
  )
}

export default NotVerified
