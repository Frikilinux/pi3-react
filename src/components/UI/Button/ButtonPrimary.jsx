import React from 'react'
import { ButtonStyled } from './ButtonPrimaryStd'
import Spinner from '../../Spinner/Spinner'
import { IconWhirl } from '@tabler/icons-react'

const ButtonPrimary = (props) => {
  const { onClick, size, notLoggedIn, type, disabled, fetching, children } = props
  return (
    <ButtonStyled
      disabled={disabled}
      type={type}
      size={size}
      onClick={!fetching ? onClick : null}
      whileHover={
        !notLoggedIn && { scale: 1.05, transition: { duration: 0.05 } }
      }
      whileTap={!notLoggedIn && { scale: 0.98, transition: { duration: 0.05 } }}
      notLoggedIn={notLoggedIn}
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
