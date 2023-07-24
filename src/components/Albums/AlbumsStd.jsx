import { styled } from 'styled-components'

export const AlbumsContainer = styled.div`
  padding: 0 30px;
  
  
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
  @media (max-width: 576px) {
    padding: unset;
    column-gap: 20px;
    width: 98%;
  }
`
