import React from 'react'
import InputUser from '../../components/UI/InputUser/InputUser'
import { FormContainer } from '../../components/UI/InputUser/InputUserStd'
import { Form, Formik } from 'formik'
import { loginInitialValues } from '../../formik/initialValues'
import { loginValidationSchema } from '../../formik/validationSchema'
import { useUser } from '../../hooks/useUser'
import ButtonPrimary from '../../components/UI/Button/ButtonPrimary'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import {
  LoginContainer,
  LoginInfo,
  LoginInfoContainer,
  RegisterText,
} from './LoginStd'
import SiteBrand from '../../components/Header/Sitebrand/SiteBrand'
import { Link, useNavigate } from 'react-router-dom'
import { ErrorModal } from '../../components/ErrorModal/ErrorModal'
import { useDispatch, useSelector } from 'react-redux'
import { setUserError } from '../../redux/user/userSlice'
import { IconAt, IconLock } from '@tabler/icons-react'
import { useMediaPredicate } from 'react-media-hook'
import UserNotFound from './Messages/UserNotFound'
import NotVerified from './Messages/NotVerified'
import LoginError from './Messages/LoginError'
import InvalidPassword from './Messages/InvalidPassword'

const LoginResponses = {
  NotVerified: <NotVerified />,
  // EmailVerified: <EmailVerified />,
  // EmailAlreadyVerified: <EmailAlreadyVerified />,
  UserNotFound: <UserNotFound />,
  LoginError: <LoginError />,
  InvalidPassword: <InvalidPassword />,
}

const Login = () => {
  const { userError, fetchingUser } = useSelector(({ user }) => user)
  const { loginUser } = useUser()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const max576 = useMediaPredicate('(max-width: 576px)')

  return (
    <Main>
      {userError && (
        <ErrorModal onClick={() => dispatch(setUserError(false))}>
          {(LoginResponses[userError?.code] &&
            LoginResponses[userError?.code]) ||
            LoginResponses.LoginError}
        </ErrorModal>
      )}

      <SectionWrapper bg='var(--Dark)' id='checkout'>
        <LoginContainer>
          <Formik
            initialValues={loginInitialValues}
            validationSchema={loginValidationSchema}
            onSubmit={async (values) =>
              (await loginUser(values)) && navigate('/')
            }
          >
            <FormContainer>
              <h1>Login with your email</h1>
              <Form>
                <InputUser
                  name='email'
                  icon={<IconAt />}
                  placeholder='Email'
                  type='email'
                />
                <InputUser
                  name='password'
                  icon={<IconLock />}
                  placeholder='Password'
                  type='password'
                />
                <ButtonPrimary type='submit' fetching={fetchingUser} disabled={fetchingUser}>
                  Log in
                </ButtonPrimary>
              </Form>
              <RegisterText>
                Don&apos;t have an account?,{' '}
                <Link style={{ color: 'var(--green)' }} to='/register'>
                  register for free
                </Link>
              </RegisterText>
            </FormContainer>
          </Formik>
          {!max576 && (
            <LoginInfoContainer>
              <SiteBrand />
              <LoginInfo>Start donwloading from 90 Million of songs</LoginInfo>
            </LoginInfoContainer>
          )}
        </LoginContainer>
      </SectionWrapper>
    </Main>
  )
}

export default Login
