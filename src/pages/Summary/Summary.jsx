import React, { useEffect } from 'react'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import { SummaryContainer } from './SummaryStd'
import useOrder from '../../hooks/useOrder'
import { useSelector } from 'react-redux'
import Spinner from '../../components/Spinner/Spinner'
import Icons from '../../constants/icons'

const Summary = () => {
  const { isFetchingOrders } = useSelector(({ orders }) => orders)
  const { getOrders } = useOrder()
  const { SpinnerIcon } = Icons

  useEffect(() => {
    getOrders()

    // return () => {
    //   second
    // }
  }, [])

  return (
    <Main>
      <SectionWrapper bg='var(--lightDark)' id='Artits'>
        <SummaryContainer>
          {isFetchingOrders ? (
            <Spinner>
              <SpinnerIcon size='5em' />
            </Spinner>
          ) : (
            <h1>Your history orders</h1>
          )}
        </SummaryContainer>

        {}
      </SectionWrapper>
    </Main>
  )
}

export default Summary
