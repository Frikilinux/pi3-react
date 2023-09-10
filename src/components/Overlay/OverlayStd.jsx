import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const OverlayContainer = styled(motion.div)`
  z-index: 10;
  position: fixed;
  top: 50px;
  /* backdrop-filter: blur(3px); */
  height: calc(100vh - 50px);
  width: 100%;
  background-color: #241b1bda;
  @media (max-width: 576px) {
    display: none;
  }
`
