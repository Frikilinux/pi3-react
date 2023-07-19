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
import { getOrderSuccess, resetError } from '../../redux/orders/ordersSlice'
import Spinner from '../../components/Spinner/Spinner'
import Icons from '../../constants/icons'
import { ErrorModal } from '../../components/ErrorModal/ErrorModal'

const Checkout = () => {
  const { user } = useSelector(({ user }) => user)
  const { items } = useSelector(({ cart }) => cart)
  const { isFetchingOrders, ordersError  } = useSelector(({ orders }) => orders)
  const { postOrder, getOrders} = useOrder()
  const dispatch = useDispatch()

  const totalPrice = items
    .reduce((acc, item) => {
      acc += item.price * item.qty
      return acc
    }, 0)
    .toFixed(2)

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
      {ordersError && <ErrorModal >{ordersError}</ErrorModal>}
      <SectionWrapper bg='var(--lightDark)' id='checkout'>
        <CheckoutContainer>
          <CheckoutInfo>
            <CheckoutTitle>Confim your order</CheckoutTitle>
            <CheckoutInfoText>
              <p>
                All links to download your albums will be sent to {user?.email}
              </p>
              <p>Confirm the following data:</p>
              <p>
                Total price $ {totalPrice} for {items.length} albums
              </p>
            </CheckoutInfoText>
            <CheckoutButtonsContainer>
              <ButtonPrimary onClick={handleConfirm}>
                {isFetchingOrders ? (
                  <Spinner>
                    <SpinnerIcon color='var(--dark)' />
                  </Spinner>
                ) : (
                  'Confirm order'
                )}
              </ButtonPrimary>
              {/* <ButtonPrimary onClick={async () => getOrders()}>
                {isFetchingOrders ? (
                  <Spinner>
                    <SpinnerIcon color='var(--dark)' />
                  </Spinner>
                ) : (
                  'Get ORDERS'
                )}
              </ButtonPrimary> */}
            </CheckoutButtonsContainer>
          </CheckoutInfo>
          <CheckoutCartContainer>
              <Cart />
          </CheckoutCartContainer>
        </CheckoutContainer>
      </SectionWrapper>
      <SectionWrapper id='contact'></SectionWrapper>
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
