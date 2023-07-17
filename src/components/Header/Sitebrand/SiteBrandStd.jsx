import { styled } from 'styled-components'

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  &:hover {
    cursor: pointer;
  }
`

export const BrandName = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--grey);
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 576px) {
    display: none;
  }
`
