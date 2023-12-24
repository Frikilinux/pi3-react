import { styled } from 'styled-components'

export const LoginContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 70px;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`

export const RegisterText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  & p {
    text-align: center;
  }
`

export const LoginInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  max-width: 500px;
`

export const LoginInfo = styled.div`
  text-align: center;
  font-size: 1.5rem;
`

export const ResponseMessages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-weight: 500;
`
