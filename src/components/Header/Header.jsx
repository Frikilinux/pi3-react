import React from 'react'
import { GenreIcon, HeaderStyled, SideBarMenu } from './HeaderStd'
import { useDispatch, useSelector } from 'react-redux'
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
import User from '../Navbar/User/User'
import useButtons from '../../hooks/useButtons'

export const Header = () => {
  const isCartHidden = useSelector(({ cart }) => cart.cartHidden)
  const isMenuHidden = useSelector(({ categories }) => categories.isHiddenMenu)
  // const { user, isModalHidden } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  // const max576 = useMediaPredicate('(max-width: 576px)')
  const max992 = useMediaPredicate('(max-width: 992px)')
  const location = useLocation()
  const { hideAllModals } = useButtons()

  return (
    <>
      <HeaderStyled>
        <SiteBrand />
        {!max992 && <NavLinks />}
        {max992 && (
          <GenreIcon
            onClick={() => {
              isMenuHidden && hideAllModals()
              dispatch(setIsHiddenMenu(!isMenuHidden))
            }}
          >
            {isMenuHidden ? <IconMenu /> : <IconX />}
          </GenreIcon>
        )}
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
          <h2>Genres</h2>
          <Genres />
        </SideBarMenu>
      )}
    </>
  )
}
