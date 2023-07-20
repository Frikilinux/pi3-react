import { styled } from 'styled-components'

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: ${({ bg }) => bg ?? 'var(--blue)'};
  background: url(${({ img }) => `${img}`}) center / cover no-repeat;
`
