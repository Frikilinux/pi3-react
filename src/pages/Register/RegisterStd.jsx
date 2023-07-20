import { styled } from 'styled-components'

export const RegisterContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 70px;
  @media(max-width: 576px){
    flex-direction: column;
  }
`

export const LoginText = styled.div`
  font-size: 1rem;
`

export const RegisterInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  max-width: 500px;
`

export const RegisterInfo = styled.div`
  text-align: center;
  font-size: 1.5rem;
`
