import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1300px;
  width: 100%;
  min-height: calc(100vh - 130px);
  align-items: center;
`

export const CheckoutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 60%;
  height: 80%;
`

export const CheckoutTitle = styled.div`
  font-weight: 600;
  font-size: 2rem;
`

export const CheckoutInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1.5rem;
  font-weight: 500;
`

export const CheckoutButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const CheckoutCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000034;
  border-radius: 10px;
  padding: 15px;
  width: 35%;
  min-height: 400px;
  /* height: 80%; */
`
