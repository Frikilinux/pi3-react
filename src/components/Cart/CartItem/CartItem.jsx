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

export const CartItem = ({ title, cover_medium: cover, artist, duration,label, price }) => {
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
            <div>+</div>
            <div>5</div>
            <div>-</div>
          </QtyBtns>
          <DeleteItem>bor</DeleteItem>
        </QtyContainer>
    </ItemContainer>
  )
}
