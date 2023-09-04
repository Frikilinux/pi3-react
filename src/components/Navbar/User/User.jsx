import React, { useState } from 'react'
import { UserButtonsContainer, UserContainer, UserNameData } from './UserStd'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '../../../redux/cart/cartSlice'
import ButtonPrimary from '../../UI/Button/ButtonPrimary'
import { useLocation, useNavigate } from 'react-router-dom'
import { IconShoppingCart } from '@tabler/icons-react'
// import { useMediaPredicate } from 'react-media-hook'
import useButtons from '../../../hooks/useButtons'
import UserModal from './UserModal/UserModal'
import { setIsModalHidden } from '../../../redux/user/userSlice'
import { AnimatePresence } from 'framer-motion'

const User = () => {
  const [showModal, setShowModal] = useState(false)

  const { user, isModalHidden } = useSelector(({ user }) => user)
  const { cartHidden } = useSelector(({ cart }) => cart)
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const firstName = user?.nombre.split(' ').slice(0, 1).join(' ')
  // const max992 = useMediaPredicate('(max-width: 992px)')
  const { hideAllModals } = useButtons()

  return (
    <>
      <AnimatePresence>
        {(user && !isModalHidden) && <UserModal />}
      </AnimatePresence>

      {user ? (
        <UserContainer>
          <UserNameData onClick={() => {
            isModalHidden && hideAllModals()
            dispatch(setIsModalHidden(!isModalHidden))}}>
            {firstName[0].toUpperCase()}
          </UserNameData>

          <UserButtonsContainer>
            {pathname !== '/checkout' && (
              <IconShoppingCart
                onClick={() => {
                  cartHidden && hideAllModals()
                  dispatch(toggleCart())
                }}
              />
            )}
          </UserButtonsContainer>
        </UserContainer>
      ) : (
        <ButtonPrimary onClick={() => navigate('/login')}>LogIn</ButtonPrimary>
      )}
    </>
  )
}

export default User
