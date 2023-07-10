import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const ButtonStyled = styled(motion.button)`
/* font-size: 1rem; */
  display: flex;
  align-items: center;
  border: none;
  font-weight: 600;
  border-radius: 5px;
  padding: 2px 10px;
  color: var(--lightDark);
  background-color: var(--red);
  &:hover {
    cursor: pointer;
  }
`
