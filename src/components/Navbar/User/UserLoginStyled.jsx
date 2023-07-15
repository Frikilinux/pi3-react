import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const UserContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 80%;
`

export const UserImgContainer = styled.div`
  border: 2px solid var(--red);
  border-radius: 5px;
  height: 100%;
  /* width: 50px; */
  background: rgb(98, 231, 220);
  background: radial-gradient(
    circle,
    rgba(98, 231, 220, 1) 0%,
    rgba(106, 0, 255, 1) 100%
  );
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
    font-size: 20px;
  }
  & p:last-child {
    color: var(--grey);
    font-weight: 700;
    font-size: 15px;
  }
`

export const UserButtonsContainer = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  gap: 10px;
`
