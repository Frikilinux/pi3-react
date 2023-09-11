import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const UserModalConatiner = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: fixed;
  top: 50px;
  right: 0;
width: 350px;
  height: 150px;
  background-color: var(--dark);
  border-radius: 0 0 0 10px;
  gap: 20px;
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  & h2 {
    color: var(--celeste);
  }
  @media (max-width: 576px) {
    max-width: unset;
    width: 100%;
    border-radius: 0;
  }
`
export const UserModalData = styled.div`
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 15px;
  & :hover {
    color: var(--red);
  }
`
export const UserModalLogoutContainer = styled.div`
  align-self: center;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  &:hover {
    cursor: pointer;
  }
`
