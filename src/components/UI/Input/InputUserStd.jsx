import { styled } from 'styled-components'

export const FormContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 90%;
  max-width: 600px;
`

export const InputComponent = styled.div`
display: flex;
flex-direction: column;

justify-content: center;
`

export const InputContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  padding: 10px 20px;
  background-color: var(--blue);
  border-radius: 5px;
`

export const InputStd = styled.input`
width: 100%;
font-size: 1.3rem;
color: var(--white);
  background-color: transparent;
`

export const ErrorMsg = styled.div`
padding: 0 10px;
  color: var(--red);
  height: 1rem;
  font-size: 0.8rem;
`
