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
import Spinner from '../../components/Spinner/Spinner'
import Icons from '../../constants/icons'
import { ErrorModal } from '../../components/ErrorModal/ErrorModal'

const Checkout = () => {
  const { user } = useSelector(({ user }) => user)
  const { items } = useSelector(({ cart }) => cart)
  const { isFetchingOrders, ordersError } = useSelector(({ orders }) => orders)
  const { postOrder } = useOrder()
  const dispatch = useDispatch()

  const totalPrice = items.reduce((acc, item) => {
    acc += item.price * item.qty
    return acc
  }, 0)

  const handleConfirm = () => {
    postOrder({
      price: ' ',
      shippingCost: ' ',
      total: totalPrice,
      shippingDetails: {
        name: user.nombre,
        address: user.email,
        cellphone: ' ',
        location: ' ',
      },
      items: items.map(
        ({ id, title, artist: desc, cover: img, price, qty: quantity }) => {
          return {
            desc,
            id,
            img,
            price,
            quantity,
            title,
          }
        },
      ),
    })
  }

  const { SpinnerIcon } = Icons

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
                <ButtonPrimary onClick={handleConfirm}>
                  {isFetchingOrders ? (
                    <Spinner>
                      <SpinnerIcon color='var(--dark)' />
                    </Spinner>
                  ) : (
                    'Confirm order'
                  )}
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

// {
//   "price": "31788.00",
//   "shippingCost": 3000,
//   "items": [
//     {
//       "dec": "Un producto",
//       "id": 25,
//       "img": "https://dev/null",
//       "price": 1000,
//       "quantity": 4,
//       "title": "La compra titulo"
//     }
//   ],
//   "total": "31788.00",
//   "shippingDetails": {
//     "name": "julian",
//     "address": "julian@mail.com",
//     "cellphone": "56545658",
//     "location": "Chacabuco"
//   }
// }
