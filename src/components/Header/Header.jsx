import React, { useState } from 'react'
import { GenreIcon, HeaderStyled } from './HeaderStd'
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
import { IconMenu } from '@tabler/icons-react'
import { useMediaPredicate } from 'react-media-hook'
import Genres from '../Categories/Genres'
import { MenuBarContainer } from '../MenuBar/MenuBarStd'
import { useLocation } from 'react-router-dom'

export const Header = () => {
  const [open, setOpen] = useState(false)
  const isCartHidden = useSelector(({ cart }) => cart.cartHidden)
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const max576 = useMediaPredicate('(max-width: 576px)')
  const location = useLocation()
  return (
    <>
      <HeaderStyled>
        <SiteBrand />
        {!max576 && <NavLinks />}
        <GenreIcon>
          <IconMenu />
        </GenreIcon>
        {user ? <UserLoggedIn /> : <UserLoggedOut />}

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
      {<NavLinks />}
      {(location.pathname === '/albums' && !max576) && (
        <MenuBarContainer
          initial={{ translateY: '0' }}
          animate={{ translateY: '0' }}
          exit={{ translateY: '-500px' }}
        >
          <Genres />
        </MenuBarContainer>
      )}
    </>
  )
}
