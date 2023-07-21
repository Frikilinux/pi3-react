import { styled } from 'styled-components'

export const HeroSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1300px;
  height: 350px;
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
`

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const HeroTextContainer = styled.div`
  padding: 15px;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  @media (max-width: 576px) {
    text-align: center;
    font-size: 1.5rem;
    width: 80%;
  }
`

