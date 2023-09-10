import { styled } from 'styled-components'

export const HeroSectionContainer = styled.div`
  display: flex;
  padding: 80px 0 50px;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1300px;
  @media (max-width: 992px) {
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
`

export const HeroLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 50%;
  @media (max-width: 992px) {
    align-items: center;
    width: 90%;
  }
`
export const HeroRight = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  @media (max-width: 992px) {
    width: 100%;
  }
`

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--dark);
  padding: 15px 0;
  & h1 {
    font-weight: 700;
    font-size: 2.5rem;
  }
  & h2 {
    /* text-wrap: balance; */
    font-weight: 400;
    font-size: 2rem;
  }
  @media (max-width: 992px) {
    text-align: center;
    font-size: 1.5rem;
  }
`

export const HeroStatsContainer = styled.div`
  color: var(--dark);
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    font-size: 1.5rem;
  }
`

export const HeroStats = styled.div`
  display: flex;
  gap: 10px;
  & h2 {
    font-size: 3rem;
    font-weight: 300;
  }
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }
  & p {
    white-space: nowrap;
    font-size: 1rem;
  }
`

export const HeroImgContainer = styled.div`
  display: flex;

`

export const HeroImg = styled.img`
opacity: .8;
max-width: 450px;
  width: 70%;
  /* min-width: 520px; */
`
