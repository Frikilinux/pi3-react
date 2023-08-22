import { styled } from 'styled-components'

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: url(${(props) => `${props.$img}`}) center / cover no-repeat;
  background-color: ${(props) => props.$bg ?? 'var(--dark)'};
`
