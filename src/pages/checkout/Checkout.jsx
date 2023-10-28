import React from 'react'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import {
  CheckoutButtonsContainer,
  CheckoutCartContainer,
  CheckoutContainer,
  CheckoutInfo,
  CheckoutInfoText,
  CheckoutTitle,
} from './CheckoutStd'
import Cart from '../../components/Cart/CartItemList/Cart'
import { useDispatch, useSelector } from 'react-redux'
import ButtonPrimary from '../../components/UI/Button/ButtonPrimary'
import useOrder from '../../hooks/useOrder'
import { resetError } from '../../redux/orders/ordersSlice'
import { ErrorModal } from '../../components/ErrorModal/ErrorModal'

const Checkout = () => {
  const { user } = useSelector(({ user }) => user)
  const { items } = useSelector(({ cart }) => cart)
  const { fetchingOrders, ordersError } = useSelector(({ orders }) => orders)
  const { postOrder } = useOrder()
  const dispatch = useDispatch()

  const totalPrice = items.reduce((acc, item) => {
    acc += item.price * item.qty
    return acc
  }, 0)

  const handleConfirm = () => postOrder({ items })

  return (
    <Main>
      {ordersError && (
        <ErrorModal onClick={() => dispatch(resetError())}>
          {ordersError}
        </ErrorModal>
      )}
      <SectionWrapper bg='var(--lightDark)' id='checkout'>
        <CheckoutContainer>
          <CheckoutInfo>
            <CheckoutTitle>Confim your order</CheckoutTitle>

            {items.length === 0 ? (
              <p>Please, add some items to your cart !!</p>
            ) : (
              <CheckoutInfoText>
                <p>
                  All links to download your albums will be sent to{' '}
                  <strong>{user?.email}</strong>
                </p>
                <p>Confirm the following data:</p>
                <p>
                  Total price <strong>$ {totalPrice}</strong> for {items.length}{' '}
                  albums
                </p>
              </CheckoutInfoText>
            )}

            <CheckoutButtonsContainer>
              {items.length !== 0 && (
                <ButtonPrimary
                  onClick={handleConfirm}
                  fetching={fetchingOrders}
                  disabled={fetchingOrders}
                >
                  {fetchingOrders ? 'Creating order...' : 'Confirm order'}
                </ButtonPrimary>
              )}
            </CheckoutButtonsContainer>
          </CheckoutInfo>
          <CheckoutCartContainer>
            <Cart />
          </CheckoutCartContainer>
        </CheckoutContainer>
      </SectionWrapper>
    </Main>
  )
}

export default Checkout
