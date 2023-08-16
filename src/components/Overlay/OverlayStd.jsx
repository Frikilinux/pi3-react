import { styled } from 'styled-components'

export const OverlayContainer = styled.div`
  z-index: 10;
  position: fixed;
  top: 50px;
  transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  backdrop-filter: blur(3px);
  height: calc(100vh - 50px);
  width: 100%;
  background-color: #241b1bda;
  @media (max-width: 576px) {
    display: none;
  }
`
