import React from 'react'
import { OverlayContainer } from './OverlayStd'
import useButtons from '../../hooks/useButtons'

const Overlay = () => {
  const { hideAllModals } = useButtons()
  return (
    <OverlayContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
      key='overlay'
      onClick={hideAllModals}
    />
  )
}

export default Overlay
