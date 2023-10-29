import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const ButtonStyled = styled(motion.button)`
  font-size: ${({ size }) => `${size ?? '1'}rem`};
  display: flex;
  align-items: center;
  border: none;
  font-weight: 600;
  border-radius: 5px;
  padding: 2px 10px;
  color: var(--lightDark);
  background-color: ${({ disabled}) =>
    disabled ? 'var(--grey)' : 'var(--red)'};
  &:hover {
    cursor: ${({ disabled}) =>
    disabled ? 'default' : 'pointer'};
  }
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`
