import React from 'react'
import { SpinnerContainer } from './SpinnerStd'

const Spinner = ({ children }) => {
  return (
    <SpinnerContainer
      animate={{ rotate: 360 }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
      key={'spinner'}
    >
      {children}
    </SpinnerContainer>
  )
}

export default Spinner
