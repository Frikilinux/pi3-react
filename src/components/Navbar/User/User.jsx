import React from 'react'
import {
  CartItemsBubble,
  LoginBtnContainer,
  UserCartIconContainer,
  UserContainer,
  UserDataContainer,
  UserNameData,
} from './UserStd'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '../../../redux/cart/cartSlice'
import ButtonPrimary from '../../UI/Button/ButtonPrimary'
import { useLocation, useNavigate } from 'react-router-dom'
import { IconShoppingCart, IconUser, IconMoodSad } from '@tabler/icons-react'
import useButtons from '../../../hooks/useButtons'
import UserModal from './UserModal/UserModal'
import { setIsModalHidden } from '../../../redux/user/userSlice'
import { AnimatePresence } from 'framer-motion'

const User = () => {
  const { user, isModalHidden } = useSelector(({ user }) => user)
  const { cartHidden, items } = useSelector(({ cart }) => cart)
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const firstName = user?.nombre.split(' ').slice(0, 1).join(' ')
  const { hideAllModals } = useButtons()

  const itemsInCart = items?.reduce((acc, item) => {
    return acc + item.qty
  }, 0)

  return (
    <>
      <AnimatePresence>
        {user && !isModalHidden && <UserModal />}
      </AnimatePresence>

      {user ? (
        <UserContainer>
          <UserDataContainer>
            <UserNameData
              onClick={() => {
                isModalHidden && hideAllModals()
                dispatch(setIsModalHidden(!isModalHidden))
              }}
            >
              {firstName[0].toUpperCase()}
            </UserNameData>

            {pathname !== '/checkout' && (
              <UserCartIconContainer
                onClick={() => {
                  cartHidden && hideAllModals()
                  dispatch(toggleCart())
                }}
              >
                <IconShoppingCart size={20} />
                <CartItemsBubble>
                  {itemsInCart || <IconMoodSad size={20} />}
                </CartItemsBubble>
              </UserCartIconContainer>
            )}
          </UserDataContainer>
        </UserContainer>
      ) : (
        <LoginBtnContainer>
          <ButtonPrimary onClick={() => navigate('/login')}>
            <span>Log in</span>
            <IconUser style={{ marginLeft: '5px' }} size={18} />
          </ButtonPrimary>
        </LoginBtnContainer>
      )}
    </>
  )
}

export default User
