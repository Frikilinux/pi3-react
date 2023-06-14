import React from 'react'
import {
  ErrorMsg,
  InputComponent,
  InputContainer,
  InputStd,
} from './InputUserStd'
import { Icons } from '../../../constants/icons'

const InputUser = ({ value, errorMsg, inputIcon, placeholder, type, id, label}) => {
  const Icon = Icons[inputIcon]

  return (
    <InputComponent>
      <InputContainer>
        <Icon size='1.5rem' />
        <InputStd {...value} placeholder={placeholder}/>
      </InputContainer>
      <ErrorMsg>{errorMsg}</ErrorMsg>
    </InputComponent>
  )
}

export default InputUser
