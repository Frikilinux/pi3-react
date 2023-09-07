import React, { useEffect } from 'react'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import {
  OrdersContainer,
  SummaryContainer,
  SummaryOrderTitle,
} from './SummaryStd'
import useOrder from '../../hooks/useOrder'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../components/Spinner/Spinner'
import Icons from '../../constants/icons'
import SummaryOrder from '../../components/SummaryOrder/SummaryOrder'
import { ErrorModal } from '../../components/ErrorModal/ErrorModal'
import { setUserError } from '../../redux/user/userSlice'
import { resetError } from '../../redux/orders/ordersSlice'

const Summary = () => {
  const { isFetchingOrders, orders, ordersError } = useSelector(
    ({ orders }) => orders,
  )
  const { getOrders } = useOrder()
  const { SpinnerIcon } = Icons
  const dispatch = useDispatch()

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <Main>
      {ordersError && (
        <ErrorModal onClick={() => dispatch(resetError())}>
          {ordersError}
        </ErrorModal>
      )}

      <SectionWrapper bg='var(--lightDark)' id='Artits'>
        <SummaryContainer>
          <SummaryOrderTitle>Your summary of orders</SummaryOrderTitle>
          {isFetchingOrders ? (
            <Spinner>
              <SpinnerIcon size='5em' />
            </Spinner>
          ) : (
            <OrdersContainer>
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
