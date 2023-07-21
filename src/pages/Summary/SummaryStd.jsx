import { styled } from 'styled-components'

export const SummaryContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 1200px;
  width: 100%;
  min-height: calc(100vh - 130px);
  align-items: center;
`

export const SummaryOrderTitle = styled.h1`
 text-align : center;
`

export const OrdersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
  justify-content: center;
`
