import React, { useState } from 'react'
import {
  ErrorMsg,
  InputComponent,
  InputContainer,
  InputStd,
} from './InputUserStd'
import { Icons } from '../../../constants/icons'
import { ErrorMessage, Field } from 'formik'

const InputUser = ({ inputIcon, placeholder, type, name }) => {
  const [showPass, setShowPass] = useState(false)
  const Icon = Icons[inputIcon]
  const Eye = Icons[!showPass ? 'showPass' : 'hidePass']

  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => {
        return (
          <InputComponent>
            <InputContainer>
              <Icon size='30px' />
              <InputStd
                name={name}
                placeholder={placeholder}
                type={type === 'password' && showPass ? 'text' : type}
                {...field}
              />
              {type === 'password' && (
                <Eye size='30px' onClick={() => setShowPass(!showPass)} />
              )}
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
