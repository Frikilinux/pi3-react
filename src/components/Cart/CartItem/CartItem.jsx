import React, { useState } from 'react'
import {
  AlbumArtist,
  AlbumData,
  AlbumImage,
  AlbumTitle,
  ItemContainer,
  ItemInfoConatainer,
  PriceData,
  QtyBtn,
  QtyBtns,
  QtyContainer,
} from './CartItemStd'
import { useDispatch } from 'react-redux'
import {
  addToCart,
  removeAlbum,
  removeFromCart,
} from '../../../redux/cart/cartSlice'
import { toast } from 'sonner'
import { AnimatePresence } from 'framer-motion'
import { IconTrash } from '@tabler/icons-react'

export const CartItem = (props) => {
  const [isHover, setIsHovering] = useState(false)
  const dispatch = useDispatch()
  const { title, cover, artist, label, price, id, qty } = props

  return (
    <ItemContainer
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <AnimatePresence>
        {isHover && (
          <QtyContainer
            initial={{ translateX: -50 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: -50 }}
            transition={{ type: 'spring', damping: 18, duration: 0.1 }}
            key='cart-qty'
          >
            <QtyBtns>
              <QtyBtn onClick={() => dispatch(addToCart(props))}>+</QtyBtn>
              <QtyBtn $qty={qty} onClick={() => dispatch(removeFromCart(id))}>
                -
              </QtyBtn>
            </QtyBtns>
            <IconTrash
              style={{ cursor: 'pointer' }}
              onClick={() => {
                dispatch(removeAlbum(id))
                toast.error(`Album removed from cart`)
              }}
            />
          </QtyContainer>
        )}
      </AnimatePresence>

      <AlbumImage src={cover} alt={title} />
      <ItemInfoConatainer>
        <AlbumTitle>{title}</AlbumTitle>
        <AlbumArtist>{artist}</AlbumArtist>
        <AlbumData>
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
