import { styled } from 'styled-components'

export const HeaderStyled = styled.header`
  padding: 0 20px;
  z-index: 99;
  display: flex;
  align-items: center;
  position: fixed;
  background-color: #201e20f4;
  backdrop-filter: blur(5px);
  width: 100%;
  height: 50px;
  @media (max-width: 576px) {
    height: 50px;
  }
`

export const GenreIcon = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  margin-right: auto;
  &:hover {
    cursor: pointer;
  }
`

export const SideBarMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  gap: 15px;
  top: 50px;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  position: fixed;
  width: 60%;
  max-width: 350px;
  height: calc(100vh - 50px);
  background-color: var(--dark);
  z-index: 10;
  @media (max-width: 576px) {
    width: 100%;
    max-width: unset;
  }
`
