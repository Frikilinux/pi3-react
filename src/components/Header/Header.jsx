import React from 'react'
import { HeaderStyled } from './HeaderStd'
import { useDispatch, useSelector } from 'react-redux'
import UserLoggedOut from '../Navbar/User/UseLoggedOut'
import UserLoggedIn from '../Navbar/User/UserLoggedIn'
import { toggleCart } from '../../redux/cart/cartSlice'

import { AnimatePresence } from 'framer-motion'
import SiteBrand from './Sitebrand/SiteBrand'
import Cart from '../Cart/CartItemList/Cart'
import { CartModal, ModalCartcontainer } from '../Cart/CartItemList/CartStd'
import CartPrice from '../Cart/CartPrice/CartPrice'
import CartButtons from '../Cart/CartButtons/CartButtons'
import NavLinks from '../Navbar/Links/NavLinks'

export const Header = () => {
  const isCartHidden = useSelector(({ cart }) => cart.cartHidden)
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  return (
    <HeaderStyled>
      <AnimatePresence>
        <SiteBrand />
        <NavLinks />
        {user ? <UserLoggedIn /> : <UserLoggedOut />}

        {!isCartHidden && (
          <CartModal
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: 'spring', damping: 18, duration: 0.1 }}
            key='cart'
          >
            <ModalCartcontainer>
              <Cart />
            </ModalCartcontainer>

            <CartPrice />
            <CartButtons />
          </CartModal>
        )}
      </AnimatePresence>
    </HeaderStyled>
  )
}
