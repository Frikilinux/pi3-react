import React, { useEffect, useState } from 'react'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import { useSelector } from 'react-redux'
import useOrder from '../../hooks/useOrder'
import { IconWhirl } from '@tabler/icons-react'
import Spinner from '../../components/Spinner/Spinner'
import { useParams } from 'react-router-dom'
import { OrderContainer, OrderItemsContainer, OrderTitle } from './OrderStd'
import OrderCard from './OrderCard./OrderCard'
import { formatOrderDate } from '../../utils/formatedDate'

const Order = () => {
  const { orders, isFetchingOrders } = useSelector(({ orders }) => orders)
  const [order, setOrder] = useState()
  const { getOrders } = useOrder()
  const { id } = useParams()

  useEffect(() => {
    const getOrder = async () => {
      if (!orders) {
        await getOrders()
      }

      setOrder(orders.find((order) => order._id === id))
    }
    getOrder()
  }, [])

  const totalPrice = order?.items.reduce((acc, item) => {
    acc += item.price * item.qty
    return acc
  }, 0)
  return (
    <Main>
      <SectionWrapper bg='var(--lightDark)' id='order-summary'>
        {isFetchingOrders ? (
          <Spinner>
            <IconWhirl size='5em' />
          </Spinner>
        ) : (
          <OrderContainer>
            <OrderTitle>
              <h1>Order summary</h1>
              <h2>#{order?._id}</h2>
              <h3>Created at {formatOrderDate(order?.created)}</h3>
            </OrderTitle>
            <OrderItemsContainer>
              {order?.items.map((item) => {
                return <OrderCard key={item.id} {...item} />
              })}
            </OrderItemsContainer>

            <h2>Total price: $ {totalPrice}</h2>
          </OrderContainer>
        )}
      </SectionWrapper>
    </Main>
  )
}

export default Order
