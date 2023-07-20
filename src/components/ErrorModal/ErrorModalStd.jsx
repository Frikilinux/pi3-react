import { styled } from 'styled-components'

export const ErrorModalContainer = styled.div`
padding: 20px;
position: absolute;
z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 30px;
  width: 90%;
  max-width: 500px;
  height: 250px;
  background-color: var(--lightDark);
  border-radius: 10px;
  box-shadow: 0 45px 65px rgba(0,0,0,0.50), 0 35px 22px rgba(0,0,0,0.16);
  & p {
    font-size: 1.5rem;
    font-weight: 500;
  }
`
