import React from 'react'
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

export const CartItem = (props) => {
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
    <ItemContainer>
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
      {/* <QtyContainer>
        <QtyBtns>
          <div onClick={() => dispatch(addToCart(props))}>+</div>
          <div>{qty}</div>
          <div onClick={() => dispatch(removeFromCart(id))}>-</div>
        </QtyBtns>
        <DeleteItem onClick={() => dispatch(removeAlbum(id))}>bor</DeleteItem>
      </QtyContainer> */}
    </ItemContainer>
  )
}
