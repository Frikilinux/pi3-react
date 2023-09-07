import { styled } from 'styled-components'

export const Logo = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 992px) {
    justify-self: center;
    justify-content: center;
    text-align: center;
    order: 2;
  }
`

export const BrandName = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--grey);
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 992px) {
    display: none;
  }
`
