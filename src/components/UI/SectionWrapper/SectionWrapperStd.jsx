import { styled } from 'styled-components'

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: url(${({ img }) => `${img}`}) center / cover no-repeat;
  background-color: ${({ bg }) => bg ?? 'var(--dark)'};
`
