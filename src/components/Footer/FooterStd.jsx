import { styled } from 'styled-components'

export const FooterStyled = styled.footer`
  padding: 10px 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark);
  height: 80px;
  width: 100%;
  /* height: 50px; */
  @media (max-width: 576px) {
    height: 160px;
    flex-direction: column;
  }
`

export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 576px) {
    text-align: center;
    align-items: center;
  }
`

export const FooterCopy = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--grey);
`

export const FootterPowered = styled.div`
  color: var(--grey);
  font-weight: 600;
  display: flex;
  align-items: center;
  & div {
    padding: 10px;
    color: var(--celeste);
  }
`
