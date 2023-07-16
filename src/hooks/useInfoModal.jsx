import React, { useState } from 'react'
import InfoModal from '../components/InfoModal/InfoModal'
import { AnimatePresence } from 'framer-motion'

export const useInfoModal = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [msg, setMsg] = useState(false)

  // const [isOpen, setIsOpen] = useState(false)

  const showInfoModal = (time) => {
    setIsVisible(true)
    setTimeout(() => setIsVisible(false), time)
  }

  const Modal = () => (
    <AnimatePresence>
      <InfoModal
        isVisible={isVisible}
        msg={msg}

      />
    </AnimatePresence>
  )

  return { isVisible, showInfoModal, Modal, setMsg }
}
