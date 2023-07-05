import React from 'react'
import { registerInitialValues } from '../../formik/initialValues'
import { Form, Formik } from 'formik'
import { FormContainer } from '../../components/UI/Input/InputUserStd'
import InputUser from '../../components/UI/Input/InputUser'
import { MainWrapper } from '../../components/UI/MainWrapper/MainWrapperStd'
import { useUser } from '../../hooks/useUser'
import { registerValidationSchema } from '../../formik/validationSchema'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const { registerUser } = useUser()
  const navigate = useNavigate()
  return (
    <MainWrapper>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values) =>
          (await registerUser(values)) && navigate('/login')
        }
      >
        <FormContainer>
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
            <button type='submit'>Registrarse</button>
          </Form>
        </FormContainer>
      </Formik>
    </MainWrapper>
  )
}

export default Register
