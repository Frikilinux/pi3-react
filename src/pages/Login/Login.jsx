import React from 'react'
import InputUser from '../../components/UI/Input/InputUser'
import { FormContainer } from '../../components/UI/Input/InputUserStd'
import { Form, Formik } from 'formik'
import { loginInitialValues } from '../../formik/initialValues'
import { loginValidationSchema } from '../../formik/validationSchema'
import { useUser } from '../../hooks/useUser'

const Login = () => {
  const { loginUser } = useUser()

  return (
    <Formik
      initialValues={loginInitialValues}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => loginUser(values)}
    >
      <FormContainer>
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
          <button type='submit'>Mandar</button>
        </Form>
      </FormContainer>
    </Formik>
  )
}

export default Login