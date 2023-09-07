import React, { useState } from 'react'
import {
  ErrorMsg,
  InputComponent,
  InputContainer,
  InputStd,
} from './InputUserStd'
import { ErrorMessage, Field } from 'formik'
import { IconEye, IconEyeClosed } from '@tabler/icons-react'

const InputUser = ({ placeholder, type, name, icon }) => {
  const [showPass, setShowPass] = useState(false)
  const Eye = !showPass ? IconEye : IconEyeClosed

  return (
    <Field name={name}>
      {({ field, form: { setFieldValues, errors, touched } }) => {
        return (
          <InputComponent>
            <InputContainer isError={errors[field.name] && touched[field.name]}>
              {icon}
              <InputStd
                name={name}
                placeholder={placeholder}
                type={type === 'password' && showPass ? 'text' : type}
                {...field}
              />
              {type === 'password' && (
                <Eye
                  style={{ cursor: 'pointer' }}
                  size='30px'
                  onClick={() => setShowPass(!showPass)}
                />
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
