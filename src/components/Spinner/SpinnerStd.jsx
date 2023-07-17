import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const SpinnerContainer = styled(motion.div)`
  color: var(--grey);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* max-height: 50px; */
  height: 100%;
  width: 100%;
`
