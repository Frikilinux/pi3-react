import { motion } from 'framer-motion'
import { styled } from 'styled-components'

const MenuBarContainer = styled(motion.div)`
  position: fixed;
  z-index: 7;
  top: 50px;
  /* width: 60%; */
  max-width: 1100px;
  /* min-height: 50px; */
  background-color: var(--grey);
  box-shadow: 2px 2px 17px #000000d1;
  color: var(--dark);
  border-radius: 0 0 5px 5px;
  transition: all 0.3 ease-in-out;
  @media (max-width: 576px) {
    top: 80px;
    width: 100%;
  }
`

export { MenuBarContainer }
