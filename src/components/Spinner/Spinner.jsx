import React from 'react'
import Icons from '../../constants/icons'
import { SpinnerContainer } from './SpinnerStd'

const Spinner = () => {
  const { SpinnerIcon } = Icons

  return (
    <SpinnerContainer
      animate={{ rotate: 360 }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <SpinnerIcon size='100%' />
    </SpinnerContainer>
  )
}

export default Spinner
