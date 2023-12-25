import React from 'react'
import { ButtonStyled } from './ButtonPrimaryStd'
import Spinner from '../../Spinner/Spinner'
import { IconWhirl } from '@tabler/icons-react'

const ButtonPrimary = ({
  onClick,
  size,
  type,
  disabled,
  fetching,
  children,
}) => {
  return (
    <ButtonStyled
      disabled={disabled || fetching}
      size={size}
      onClick={!fetching ? onClick : null}
      whileHover={!disabled && { scale: 1.05, transition: { duration: 0.05 } }}
      whileTap={!disabled && { scale: 0.98, transition: { duration: 0.05 } }}
    >
      {children}
      {fetching && (
        <Spinner>
          <IconWhirl size={size ? `${size}rem` : '1rem'} color='var(--dark)' />
        </Spinner>
      )}
    </ButtonStyled>
  )
}

export default ButtonPrimary
