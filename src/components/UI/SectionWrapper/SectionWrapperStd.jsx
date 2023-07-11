import { styled } from 'styled-components'

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: ${({ bg }) => bg ?? 'var(--blue)'};
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1300px;
  @media(max-width: 576px){
    width: 100%;
  }
`
