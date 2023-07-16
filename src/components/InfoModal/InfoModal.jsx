import React from 'react'
import { InfoModalContainer } from './InfoModalStd'
import { AnimatePresence } from 'framer-motion'

const InfoModal = ({ msg, isVisible }) => {
  return isVisible ? (
    <AnimatePresence>
      <InfoModalContainer
        initial={{ translateY: 50 }}
        animate={{ translateY: 100 }}
        exit={{ translateY: 50 }}
        transition={{ type: 'spring', damping: 18, duration: 0.1 }}
        key='info-modal'
      >
        {msg}
      </InfoModalContainer>
    </AnimatePresence>
  ) : null
}

export default InfoModal
