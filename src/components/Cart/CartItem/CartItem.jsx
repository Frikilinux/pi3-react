import React from 'react'
import {
  DeleteItem,
  ImgContainer,
  ItemContainer,
  ItemInfoConatainer,
  QtyBtns,
  QtyContainer,
} from './CartItemStd'
import formatTime from '../../../utils/fomatedTime'
import { useDispatch } from 'react-redux'
import { addToCart, removeAlbum, removeFromCart } from '../../../redux/cart/cartSlice'

export const CartItem = (props) => {
  const { title, cover_medium: cover, artist, duration,label, price, id, qty } = props
  const dispatch = useDispatch()

  return (
    <ItemContainer>
      <ImgContainer>
        <img src={cover} alt={title} />
      </ImgContainer>
      <ItemInfoConatainer>
        <p>{title}</p>
        <p>{artist.name}</p>
        <p>{formatTime(duration)}</p>
        <p>{label}</p>
        <p>$ {price}</p>
      </ItemInfoConatainer>
        <QtyContainer>
          <QtyBtns>
            <div onClick={() => dispatch(addToCart(props))}>+</div>
            <div>{qty}</div>
            <div onClick={() => dispatch(removeFromCart(id))}>-</div>
          </QtyBtns>
          <DeleteItem onClick={() => dispatch(removeAlbum(id))}>bor</DeleteItem>
        </QtyContainer>
    </ItemContainer>
  )
}
