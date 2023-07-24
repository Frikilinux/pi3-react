import React from 'react'
import { OverlayContainer } from './OverlayStd'
import useButtons from '../../hooks/useButtons'

const Overlay = () => {
  const { hideAllModals } = useButtons()
  return <OverlayContainer onClick={hideAllModals} />
}

export default Overlay
