import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1300px;
  width: 100%;
  padding: 80px 0 40px;
  min-height: calc(100vh - 130px);
  align-items: center;
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    width: 95%;
    gap: 20px;
  }
`

export const CheckoutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: center;
  width: 60%;
  height: 80%;
  @media (max-width: 992px) {
    width: 85%;
  }
  @media (max-width: 576px) {
    width: 95%;
  }
`

export const CheckoutTitle = styled.div`
  font-weight: 600;
  font-size: 2.5rem;
  color: var(--green);
`

export const CheckoutInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1.5rem;
  font-weight: 500;
  & strong {
    color: var(--red);
  }
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
  /* min-height: 400px; */
  height: 75vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 992px) {
    width: 65%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`
// export const CheckoutCartInner = styled.div`
//   overflow-y: scroll;
//   /* padding: 30px 10px; */
//   /* width: 100%; */
//   height: 70vh;
// `
