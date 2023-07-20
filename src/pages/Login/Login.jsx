import React from 'react'
import InputUser from '../../components/UI/Input/InputUser'
import { FormContainer } from '../../components/UI/Input/InputUserStd'
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

const Login = () => {
  const { userError } = useSelector(({ user }) => user)
  const { loginUser } = useUser()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <Main>
      {userError && <ErrorModal onClick={() => dispatch(setUserError(false))}>{userError}</ErrorModal>}
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
                  inputIcon='mail'
                  placeholder='Email'
                  type='text'
                />
                <InputUser
                  name='password'
                  inputIcon='password'
                  placeholder='Password'
                  type='password'
                />
                <ButtonPrimary type='submit'>Log in</ButtonPrimary>
              </Form>
              <RegisterText>
                Don&apos;t have an account?,{' '}
                <Link style={{ color: 'var(--green)' }} to='/register'>
                  register for free
                </Link>
              </RegisterText>
            </FormContainer>
          </Formik>
          <LoginInfoContainer>
            <SiteBrand />
            <LoginInfo>Start donwloading from 90 Million of songs</LoginInfo>
          </LoginInfoContainer>
        </LoginContainer>
      </SectionWrapper>
    </Main>
  )
}

export default Login
