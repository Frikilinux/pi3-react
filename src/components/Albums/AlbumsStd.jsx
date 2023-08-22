import { styled } from 'styled-components'

export const AlbumsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 30px;
  gap: 30px;
  @media (max-width: 576px) {
    padding: unset;
    gap: 20px;
  }
`
