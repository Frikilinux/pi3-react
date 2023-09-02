import React, { useState } from 'react'
import { GenreIcon, HeaderStyled, SideBarMenu } from './HeaderStd'
import { useDispatch, useSelector } from 'react-redux'
// import UserLoggedOut from '../Navbar/User/UseLoggedOut'
// import UserLoggedIn from '../Navbar/User/UserLoggedIn'
// import { toggleCart } from '../../redux/cart/cartSlice'

import { AnimatePresence } from 'framer-motion'
import SiteBrand from './Sitebrand/SiteBrand'
import Cart from '../Cart/CartItemList/Cart'
import { CartModal, ModalCartcontainer } from '../Cart/CartItemList/CartStd'
import CartPrice from '../Cart/CartPrice/CartPrice'
import CartButtons from '../Cart/CartButtons/CartButtons'
import NavLinks from '../Navbar/Links/NavLinks'
import { IconMenu, IconX } from '@tabler/icons-react'
import { useMediaPredicate } from 'react-media-hook'
import Genres from '../Categories/Genres'
import { MenuBarContainer } from '../MenuBar/MenuBarStd'
import { useLocation } from 'react-router-dom'
import { setIsHiddenMenu } from '../../redux/categories/categoriesSlice'
import UserModal from '../Navbar/User/UserModal/UserModal'
import User from '../Navbar/User/User'

export const Header = () => {
  const isCartHidden = useSelector(({ cart }) => cart.cartHidden)
  const isMenuHidden = useSelector(({ categories }) => categories.isHiddenMenu)
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const max576 = useMediaPredicate('(max-width: 576px)')
  const max992 = useMediaPredicate('(max-width: 992px)')
  const location = useLocation()
  return (
    <>
      <HeaderStyled>
        <SiteBrand />
        {!max992 && <NavLinks />}
        {max992 && (
          <GenreIcon onClick={() => dispatch(setIsHiddenMenu(!isMenuHidden))}>
            {isMenuHidden ? <IconMenu /> : <IconX />}
          </GenreIcon>
        )}
        {/* {user ? <UserLoggedIn /> : <UserLoggedOut />} */}
        <User />

        <AnimatePresence>
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
      {location.pathname === '/albums' && !max992 && (
        <MenuBarContainer>
          <Genres />
        </MenuBarContainer>
      )}

      {max992 && (
        <SideBarMenu open={!isMenuHidden}>
          <NavLinks />
          {/* {user ? <UserLoggedIn /> : <UserLoggedOut />} */}
          <h2>Genres</h2>
          <Genres />
        </SideBarMenu>
      )}
    </>
  )
}
