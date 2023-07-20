import React from 'react'
import { registerInitialValues } from '../../formik/initialValues'
import { Form, Formik } from 'formik'
import { FormContainer } from '../../components/UI/Input/InputUserStd'
import InputUser from '../../components/UI/Input/InputUser'
import { useUser } from '../../hooks/useUser'
import { registerValidationSchema } from '../../formik/validationSchema'
import { useNavigate, Link } from 'react-router-dom'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import {
  LoginText,
  RegisterContainer,
  RegisterInfo,
  RegisterInfoContainer,
} from './RegisterStd'
import SiteBrand from '../../components/Header/Sitebrand/SiteBrand'
import ButtonPrimary from '../../components/UI/Button/ButtonPrimary'
import { useDispatch, useSelector } from 'react-redux'
import { ErrorModal } from '../../components/ErrorModal/ErrorModal'
import { setUserError } from '../../redux/user/userSlice'

const Register = () => {
  const { registerUser } = useUser()
  const { userError } = useSelector(({ user }) => user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <Main>
      {userError && (
        <ErrorModal onClick={() => dispatch(setUserError(false))}>
          {userError}
        </ErrorModal>
      )}
      <SectionWrapper bg='var(--Dark)' id='checkout'>
        <RegisterContainer>
          <Formik
            initialValues={registerInitialValues}
            validationSchema={registerValidationSchema}
            onSubmit={async (values) =>
              (await registerUser(values)) && navigate('/login')
            }
          >
            <FormContainer>
              <h1>Register for free</h1>
              <Form>
                <InputUser
                  name='name'
                  inputIcon='name'
                  placeholder='Nombre'
                  type='text'
                />
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
                <ButtonPrimary type='submit'>Registrarse</ButtonPrimary>
              </Form>
              <LoginText>
                Are you rgisterd,{' '}
                <Link style={{ color: 'var(--green)' }} to='/login'>
                  log in to start
                </Link>
              </LoginText>
            </FormContainer>
          </Formik>
          <RegisterInfoContainer>
            <SiteBrand />
            <RegisterInfo>
              Start donwloading from 90 Million of songs
            </RegisterInfo>
          </RegisterInfoContainer>
        </RegisterContainer>
      </SectionWrapper>
    </Main>
  )
}

export default Register
