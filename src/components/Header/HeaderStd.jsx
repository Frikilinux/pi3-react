import { styled } from 'styled-components'

export const HeaderStyled = styled.header`
  padding: 0 20px ;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background-color: var(--dark);
  width: 100%;
  height: 50px;
  @media (max-width: 576px) {
    justify-content: space-around;
    height: 30px;
  }
`
