import { styled } from 'styled-components'

export const FormContainer = styled.div`
  color: var(--grey);
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  min-width: 300px;
  width: 50%;
`

export const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* justify-content: center; */
  height: 90px;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
  padding: 10px 20px;
  background-color: var(--lightDark);
  border-radius: ${({ $isError }) => ($isError ? '5px 5px 0 0' : '5px')};
  border: 1px solid ${({ $isError }) => ($isError ? 'var(--red)' : 'transparent')};
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
  background-color: var(--red);
  color: var(--dark);
  height: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 0 0 5px 5px;
`
