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

export const UserDataContainer = styled.div`
  border-radius: 15px;
  display: flex;
  gap: 10px;
  background-color: var(--green);
`

export const UserNameData = styled.div`
  color: var(--white);
  font-size: 1.2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background-color: #345007;
  border-radius: 50px;
  &:hover {
    color: var(--red);
    cursor: pointer;
  }
`

export const UserCartIconContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  padding: 2px 5px;
  color: var(--dark);
  gap: 5px;
  transition: 0.5 all ease;
  &:hover {
    cursor: pointer;
    /* background-color: var(--celeste); */
    color: #b40e4d;
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
