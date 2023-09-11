import React from 'react'
import { ButtonStyled } from './ButtonPrimaryStd'

const ButtonPrimary = (props) => {
  const { onClick, size, notLoggedIn, type, disabled } = props
  return (
    <ButtonStyled
      disabled={disabled}
      type={type}
      size={size}
      onClick={onClick}
      whileHover={
        !notLoggedIn && { scale: 1.05, transition: { duration: 0.05 } }
      }
      whileTap={!notLoggedIn && { scale: 0.98, transition: { duration: 0.05 } }}
      notLoggedIn={notLoggedIn}
    >
      {props.children}
    </ButtonStyled>
  )
}

export default ButtonPrimary
