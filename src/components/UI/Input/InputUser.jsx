import React from 'react'
import {
  ErrorMsg,
  InputComponent,
  InputContainer,
  InputStd,
} from './InputUserStd'
import { Icons } from '../../../constants/icons'
import { ErrorMessage, Field } from 'formik'

const InputUser = ({ inputIcon, placeholder, type, name }) => {
  const Icon = Icons[inputIcon]

  return (
    <Field name={name}>
      {({ field, form: { errors, touched }}) => {
        return (
          <InputComponent>
            <InputContainer>
              <Icon size='30px' />
              <InputStd
                name={name}
                placeholder={placeholder}
                type={type}
                {...field}
              />
            </InputContainer>
            <ErrorMessage name={field.name}>
              {(message) => <ErrorMsg>{message}</ErrorMsg>}
            </ErrorMessage>
          </InputComponent>
        )
      }}
    </Field>
  )
}

export default InputUser
