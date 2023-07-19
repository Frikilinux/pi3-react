import React from 'react'
import { ErrorModalContainer } from './ErrorModalStd'
import ButtonPrimary from '../UI/Button/ButtonPrimary'
import { useDispatch } from 'react-redux'
import { resetError } from '../../redux/orders/ordersSlice'

export const ErrorModal = ({ children }) => {
const dispatch = useDispatch()

  return (
    <ErrorModalContainer>
      <p>{children}</p>
      <ButtonPrimary onClick={() => dispatch(resetError())}>Ok</ButtonPrimary>
    </ErrorModalContainer>
  )
}
