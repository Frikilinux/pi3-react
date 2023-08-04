import { styled } from 'styled-components'

const MenuBarContainer = styled.div`
  position: fixed;
  z-index: 7;
  top: 50px;
  width: 90%;
  max-width: 1400px;
  /* min-height: 50px; */
  background-color: var(--grey);
  box-shadow: 2px 2px 17px #000000d1;
  color: var(--dark);
  border-radius: 0 0 5px 5px;
  @media (max-width: 992px) {
    width: 100%;
  }
`

export { MenuBarContainer }
