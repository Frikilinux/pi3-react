import { styled } from 'styled-components'

export const FormContainer = styled.div`
  color: var(--grey);
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  min-width: 300px;
  width: 90%;
  max-width: 400px;
`

export const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  height: 90px;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
  padding: 10px 20px;
  background-color: var(--lightDark);
  border-radius: ${({ isError }) => (isError ? '5px 5px 0 0' : '5px')};
  /* border: ${({ isError }) => (isError ? '2px solid var(--red)' : 'none')}; */
`

export const InputStd = styled.input`
  width: 100%;
  font-size: 1.3rem;
  color: var(--white);
  background-color: transparent;
`

export const ErrorMsg = styled.div`
display: flex;
align-items: center;
  padding: 0 10px;
  background-color:var(--red) ;
  color: var(--dark);
  height: 20px;
  font-size: 0.7rem;
  font-weight: 500;
  border-radius: 0 0 5px 5px;
`
