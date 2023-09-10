import { motion } from 'framer-motion'
import { styled } from 'styled-components'

// Tranformarlo a motion frmer
export const CartModal = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  backdrop-filter: blur(5px);
  position: fixed;
  top: 50px;
  height: calc(100vh - 50px);
  width: 100%;
  max-width: 500px;
  min-width: 320px;
  background-color: #333847f6;
  bottom: 0;
  right: 0;
  padding: 15px;
  @media (max-width: 576px) {
    max-width: unset;
  }
`
export const ModalCartcontainer = styled.div`
  width: 100%;
  height: 80%;
`

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  height: 100%;
  width: 100%;
`

export const ItemsContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ $items }) => ($items ? 'flex-start' : 'center')};
  gap: 15px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  &::-webkit-scrollbar {
    display: none;
  }
`
