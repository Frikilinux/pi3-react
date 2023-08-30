import React from 'react'
import {
  UserButtonsContainer,
  UserContainer,
  UserIconContainer,
  UserImg,
  UserImgContainer,
  UserNameData,
} from './UserLoginStd'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../../redux/user/userSlice'
import { hideCart, toggleCart } from '../../../redux/cart/cartSlice'
import ButtonPrimary from '../../UI/Button/ButtonPrimary'
import { useLocation, useNavigate } from 'react-router-dom'
import { IconUser, IconShoppingCart, IconLogout } from '@tabler/icons-react'
import { useMediaPredicate } from 'react-media-hook'

const UserLoggedIn = () => {
  const { user } = useSelector(({ user }) => user)
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const firstName = user?.nombre.split(' ').slice(0, 1).join(' ')
  const max992 = useMediaPredicate('(max-width: 992px)')

  return (
    <>
      <UserIconContainer>
        <IconUser />
      </UserIconContainer>
      {user ? (
        <UserContainer
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          key={'user-data'}
        >
          {!max992 && (
            <>
              <UserImgContainer>
                <UserImg
                  src={`https://robohash.org/${user?.nombre}?set=set3`}
                  alt={`Foto del usuario ${user?.nombre}`}
                />
              </UserImgContainer>
              <UserNameData>
                <p>Hi, {firstName}</p>
                {/* <p>{email}</p> */}
              </UserNameData>
            </>
          )}

          <UserButtonsContainer>
            {/* <ButtonPrimary
            onClick={() => {
              dispatch(logOut())
              dispatch(hideCart())
            }}
          >
            <IconLogout />
          </ButtonPrimary> */}
            {pathname !== '/checkout' && (
              <IconShoppingCart onClick={() => dispatch(toggleCart())} />
            )}
          </UserButtonsContainer>
        </UserContainer>
      ) : (
        <ButtonPrimary onClick={() => navigate('/login')}>LogIn</ButtonPrimary>
      )}
    </>
  )
}

export default UserLoggedIn
