import React, { useState } from 'react'
import {
  AlbumArtist,
  AlbumData,
  AlbumImage,
  AlbumTitle,
  DeleteItem,
  ItemContainer,
  ItemInfoConatainer,
  PriceData,
  QtyBtns,
  QtyContainer,
} from './CartItemStd'
import formatTime from '../../../utils/fomatedTime'
import { useDispatch } from 'react-redux'
import {
  addToCart,
  removeAlbum,
  removeFromCart,
} from '../../../redux/cart/cartSlice'
import Icons from '../../../constants/icons'
import { toast } from 'react-toastify'
import ButtonPrimary from '../../UI/Button/ButtonPrimary'
import { AnimatePresence } from 'framer-motion'

const { Trash } = Icons

export const CartItem = (props) => {
  const [isHover, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  const {
    title,
    cover_medium: cover,
    artist,
    duration,
    label,
    price,
    id,
    qty,
  } = props
  const dispatch = useDispatch()

  return (
    <ItemContainer
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <AnimatePresence>
        {' '}
        {isHover && (
          <QtyContainer
            initial={{ translateX: -50 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: -50 }}
            transition={{ type: 'spring', damping: 18, duration: 0.1 }}
            key='cart-qty'
          >
            <QtyBtns>
              <div onClick={() => dispatch(addToCart(props))}>+</div>
              {/* <div>{qty}</div> */}
              <div onClick={() => dispatch(removeFromCart(id))}>-</div>
            </QtyBtns>
            <ButtonPrimary
              onClick={() => {
                dispatch(removeAlbum(id))
                toast.info(`Album removed from cart`)
              }}
            >
              <Trash />
            </ButtonPrimary>
          </QtyContainer>
        )}
      </AnimatePresence>

      <AlbumImage src={cover} alt={title} />
      <ItemInfoConatainer>
        <AlbumTitle>{title}</AlbumTitle>
        <AlbumArtist>{artist?.name}</AlbumArtist>
        <AlbumData>
          {/* <p>{formatTime(duration)} min</p> */}
          <p>{label}</p>
        </AlbumData>

        <PriceData>
          <div>{qty}u.</div>
          <div>$ {price * qty}</div>
        </PriceData>
      </ItemInfoConatainer>
    </ItemContainer>
  )
}
