import { styled } from 'styled-components'

export const ErrorModalContainer = styled.div`
position: absolute;
z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 90%;
  max-width: 500px;
  height: 250px;
  background-color: var(--dark);
  border-radius: 10px;
  & p {
    font-size: 1.5rem;
    font-weight: 500;
  }
`
