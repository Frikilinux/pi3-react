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

export const UserCartIconContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  padding: 2px 5px;
  background-color: var(--green);
  border-radius: 2px;
  color: var(--dark);
  gap: 5px;
  transition: 0.5 all ease;
  &:hover {
    cursor: pointer;
    background-color: var(--celeste);
    transition: 0.5 all ease;
  }
  &:active {
    /* transform: scale(0.95); */
  }
  @media (max-width: 576px) {
  }
`

export const CartItemsBubble = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  /* flex-wrap: nowrap; */
  /* width: 20px; */
  font-size: 18px;
  font-weight: 600;
`

export const LoginBtnContainer = styled.div`
  flex: 1;
  order: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  white-space: nowrap;
`
