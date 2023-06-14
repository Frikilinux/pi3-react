import React from 'react'
import InputUser from '../../components/UI/Input/InputUser'
import { FormContainer } from '../../components/UI/Input/InputUserStd'
import { Field, Form, Formik } from 'formik'
import { loginInitialValues } from '../../formik/initialValues'
import { loginValidationSchema } from '../../formik/validationSchema'

const Login = () => {
  return (
    <Formik
      initialValues={loginInitialValues}
      validationSchema={loginValidationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values)
        resetForm()
      }}
    >
      {({ errors, touched }) => (
        <FormContainer>
          <Form>
            <Field
              name='email'
              inputIcon='mail'
              placeholder='Email'
              errorMsg={
                errors.email && touched.email ? `${errors.email}` : null
              }
              as={InputUser}
            />
            <Field
              name='password'
              inputIcon='password'
              placeholder='Password'
              errorMsg={
                errors.password && touched.password ? `${errors.password}` : null
              }
              as={InputUser}
            />
            <button type='submit'>Mandar</button>
          </Form>
        </FormContainer>
      )}
    </Formik>
  )
}

export default Login
