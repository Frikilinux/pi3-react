import React from 'react'
import { ButtonStyled } from './ButtonPrimaryStd'

const ButtonPrimary = (props) => {
  return (
    <ButtonStyled
      onClick={props.onClick}
      whileHover={{ scale: 1.05, transition: { duration: 0.05 } }}
      whileTap={{ scale: 0.98, transition: { duration: 0.05 } }}
    >
      {props.children}
    </ButtonStyled>
  )
}

export default ButtonPrimary
