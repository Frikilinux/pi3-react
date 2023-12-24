import React from 'react'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import { RecoverContainer, RecoverFormContainer } from './RecoverStd'
import { Form, Formik } from 'formik'
import InputUser from '../../components/UI/InputUser/InputUser'
import { IconAt } from '@tabler/icons-react'
import ButtonPrimary from '../../components/UI/Button/ButtonPrimary'
import { recoverValidationSchema } from '../../formik/validationSchema'
import { useDispatch, useSelector } from 'react-redux'
import { useUser } from '../../hooks/useUser'
import { useNavigate } from 'react-router-dom'
import { ErrorModal } from '../../components/ErrorModal/ErrorModal'
import { setUserError } from '../../redux/user/userSlice'
import NotVerified from '../../components/ErrorModal/Messages/NotVerified'
import UserNotFound from '../../components/ErrorModal/Messages/UserNotFound'
import MsgError from '../../components/ErrorModal/Messages/LoginError'
import EmailAlreadyVerified from '../../components/ErrorModal/Messages/EmailAlreadyVerified'

export const Recover = () => {
  const { userError, fetchingUser } = useSelector(({ user }) => user)
  const { resetPassword } = useUser()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const RecoverResponses = {
    NotVerified: <NotVerified />,
    UserNotFound: <UserNotFound />,
    EmailAlreadyVerified: <EmailAlreadyVerified />,
    MsgError: <MsgError />,
  }

  return (
    <Main>
      {userError && (
        <ErrorModal onClick={() => dispatch(setUserError(false))}>
          {RecoverResponses[userError?.code] ?? RecoverResponses.MsgError}
        </ErrorModal>
      )}

      <RecoverContainer>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={recoverValidationSchema}
          onSubmit={async (values) =>
            (await resetPassword(values)) && navigate('/login')
          }
        >
          <RecoverFormContainer>
            <h1>Recover your password</h1>
            <Form>
              <InputUser
                name='email'
                icon={<IconAt />}
                placeholder='Email'
                type='email'
              />
              <ButtonPrimary
                type='submit'
                fetching={fetchingUser}
                disabled={fetchingUser}
              >
                {fetchingUser ? 'Sending reset link...' : 'Reset password'}
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
