import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const UserContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 70%;
  order: 3;

`

export const UserImgContainer = styled.div`
  /* border: 1px solid var(--red); */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 30px;
  /* width: 50px; */
  background: rgb(98, 231, 220);
  background: radial-gradient(circle, #788181 0%, #313233 100%);
`

export const UserImg = styled.img`
  height: 100%;
`

export const UserNameData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
  height: 100%;
  & p {
    padding: 0 10px;
    color: var(--white);
    font-size: 15px;
    white-space: nowrap;
    font-weight: 700;
    color: var(--grey);
  }
  /* & p:last-child {
    color: var(--grey);
    font-weight: 700;
    font-size: 12px;
  } */
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
export const UserIconContainer = styled.div`
  color: var(--white);
  display: none;
  @media (max-width: 992px) {
    order: 3;
    /* display: flex; */
  }
`
