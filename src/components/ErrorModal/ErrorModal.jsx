import React from 'react'
import { ErrorModalContainer } from './ErrorModalStd'
import ButtonPrimary from '../UI/Button/ButtonPrimary'

export const ErrorModal = (props) => {

  const { children, onClick } = props

  return (
    <ErrorModalContainer>
      {children}
      {onClick && <ButtonPrimary onClick={onClick}>Close</ButtonPrimary>}
    </ErrorModalContainer>
  )
}
