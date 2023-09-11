import { styled } from 'styled-components'

export const SectionContainer = styled.section`
  padding: ${({$padding}) => $padding};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: url(${(props) => `${props.$img}`}) center / cover no-repeat;
  background-color: ${({$bg}) => $bg ?? 'var(--dark)'};
`
