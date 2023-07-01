import { styled } from 'styled-components'

// Tranformarlo a motion frmer
export const CartModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
  backdrop-filter: blur(5px);
  position: fixed;
  height: calc(100vh - 70px);
  width: 100%;
  max-width: 500px;
  min-width: 320px;
  background-color: #1919b944;
  top: 70px;
  right: 0;
  padding: 15px;
`

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background-color: #ffa60058;
  height: 100%;
  width: 100%;
`
