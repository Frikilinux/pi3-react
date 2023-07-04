import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const ButtonStyled = styled(motion.button)`
  display: flex;
  align-items: center;
  border: none;
  font-weight: 600;
  border-radius: 5px;
  padding: 2px 10px;
  background-color: #55d185;
  &:hover {
    cursor: pointer;
  }
`
