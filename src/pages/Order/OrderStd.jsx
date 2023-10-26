import styled from 'styled-components'

const OrderContainer = styled.div`
  padding: 80px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  min-height: calc(100vh - 130px);
  align-items: center;
`

const OrderTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  gap: 10px;
  & h1 {
    font-size: 2.5rem;
    @media (max-width: 576px) {
      font-size: 2rem;
    }
  }
  & h2 {
    font-weight: 300;
    @media (max-width: 576px) {
      font-size: 1.1rem;
    }
  }
`

const OrderItemsContainer = styled.div`
  max-width: 600px;
  width: 100%;
  background-color: grey;
  border-radius: 5px;
`

export { OrderContainer, OrderItemsContainer, OrderTitle }
