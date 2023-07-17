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
import { useSelector } from 'react-redux'
import ButtonPrimary from '../../components/UI/Button/ButtonPrimary'
import useOrder from '../../hooks/useOrder'
import { getOrderSuccess } from '../../redux/orders/ordersSlice'

const Checkout = () => {
  const { user } = useSelector(({ user }) => user)
  const { items } = useSelector(({ cart }) => cart)
  const { postOrder, getOrders } = useOrder()

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
        ({ id, title, artist, cover_medium: img, price, qty }) => {
          return {
            desc: artist?.name || ' ',
            id,
            img,
            price,
            quantity: qty,
            title,
          }
        },
      ),
    })
  }

  return (
    <Main>
      <SectionWrapper bg='var(--lightDark)' id='checkout'>
        <CheckoutContainer>
          <CheckoutInfo>
            <CheckoutTitle>Confim your order</CheckoutTitle>
            <CheckoutInfoText>
              <p>
                All links to download your albums will be sent to {user?.email}
              </p>
              <p>Confirm the following data:</p>
              <p>Total price $ {totalPrice} for {items.length} albums</p>
            </CheckoutInfoText>
            <CheckoutButtonsContainer>
              <ButtonPrimary onClick={handleConfirm}>
                Confirm order
              </ButtonPrimary>
              <ButtonPrimary onClick={() => getOrders()}>
                Get ORDERS
              </ButtonPrimary>
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
