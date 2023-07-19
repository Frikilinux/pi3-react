import React, { useEffect } from 'react'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import { OrdersContainer, SummaryContainer } from './SummaryStd'
import useOrder from '../../hooks/useOrder'
import { useSelector } from 'react-redux'
import Spinner from '../../components/Spinner/Spinner'
import Icons from '../../constants/icons'
import SummaryOrder from '../../components/SummaryOrder/SummaryOrder'

const Summary = () => {
  const { isFetchingOrders, orders } = useSelector(({ orders }) => orders)
  const { getOrders } = useOrder()
  const { SpinnerIcon } = Icons

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <Main>
      <SectionWrapper bg='var(--lightDark)' id='Artits'>
        <SummaryContainer>
          <h1>Your summary of orders</h1>
          {isFetchingOrders ? (
            <Spinner>
              <SpinnerIcon size='5em' />
            </Spinner>
          ) : (
            <OrdersContainer>
              {console.log('ORDER', orders)}
              {orders?.map((order) => {
                return <SummaryOrder {...order} key={order._id} />
              })}
            </OrdersContainer>
          )}
        </SummaryContainer>

        {}
      </SectionWrapper>
    </Main>
  )
}

export default Summary
