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
export const HeroSearchContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`
export const SearchInput = styled.input`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 1.3rem;
  color: var(--grey);
  height: 40px;
  border-radius: 10px;
  background-color: var(--dark);
  padding: 0 30px;
  @media (max-width: 576px) {
    font-size: 1rem;
    padding: 0 10px;
  }
`
