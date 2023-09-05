import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const UserContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  height: 70%;
  order: 3;
  gap: 10px;
   margin-left: auto;
`
export const UserNameData = styled.div`
  color: var(--blue);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: var(--grey);
  border-radius: 50px;
  &:hover {
    cursor: pointer;
  }
`

export const UserButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 5px;
  }
`
