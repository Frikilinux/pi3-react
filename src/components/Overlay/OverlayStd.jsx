import { styled } from 'styled-components'

export const OverlayContainer = styled.div`
  z-index: 10;
  position: absolute;
  top: 50px;
  backdrop-filter: blur(3px);
  height: calc(100vh - 50px);
  width: 100%;
  background-color: #241b1bda;
  @media (max-width: 576px) {
    display: none;
  }
`
