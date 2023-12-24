import React from 'react'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import { RecoverContainer, RecoverFormContainer } from './ResetPassStd'
import { Form, Formik } from 'formik'
import InputUser from '../../components/UI/InputUser/InputUser'
import { IconLock } from '@tabler/icons-react'
import ButtonPrimary from '../../components/UI/Button/ButtonPrimary'
import { changePasswordValidationSchema } from '../../formik/validationSchema'
import { useDispatch, useSelector } from 'react-redux'
import { useUser } from '../../hooks/useUser'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ErrorModal } from '../../components/ErrorModal/ErrorModal'
import { setUserError } from '../../redux/user/userSlice'
import ResetPassTokenExpiredError from '../../components/ErrorModal/Messages/ResetPassTokenExpiredError'
import NotVerified from '../../components/ErrorModal/Messages/NotVerified'
import UserNotFound from '../../components/ErrorModal/Messages/UserNotFound'

export const ResetPass = () => {
  const { userError, fetchingUser } = useSelector(({ user }) => user)
  const { resetPassword, changePassword } = useUser()
  const [searchParams] = useSearchParams()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleResetPassword = async () => {
    await resetPassword({ email: userError?.email })
    dispatch(setUserError(false))
    navigate('/login')
  }

  const ResetResponses = {
    NotVerified: <NotVerified />,
    TokenExpiredError: (
      <ResetPassTokenExpiredError
        email={userError?.email}
        onClick={handleResetPassword}
      />
    ),
    UserNotFound: <UserNotFound />,
  }

  return (
    <Main>
      {userError && (
        <ErrorModal onClick={() => dispatch(setUserError(false))}>
          {(ResetResponses[userError?.code] &&
            ResetResponses[userError?.code]) ||
            ResetResponses.LoginError}
        </ErrorModal>
      )}

      <RecoverContainer>
        <Formik
          initialValues={{ password: '', passwordConfirmation: '' }}
          validationSchema={changePasswordValidationSchema}
          onSubmit={async (values) =>
            (await changePassword({
              ...values,
              token: searchParams.get('token'),
            })) && navigate('/login')
          }
        >
          <RecoverFormContainer>
            <h1>Change your password</h1>
            <Form>
              <InputUser
                name='password'
                icon={<IconLock />}
                placeholder='New password'
                type='password'
              />
              <InputUser
                name='passwordConfirmation'
                icon={<IconLock />}
                placeholder='Confirm password'
                type='password'
              />
              <ButtonPrimary
                type='submit'
                fetching={fetchingUser}
                disabled={fetchingUser}
              >
                {fetchingUser ? 'Changing password...' : 'Change password'}
              </ButtonPrimary>
            </Form>
            <p style={{ padding: '0 0 10px 0' }}>
              Recovering your password is easy.
            </p>
          </RecoverFormContainer>
        </Formik>
      </RecoverContainer>
    </Main>
  )
}
