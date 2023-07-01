import React from 'react'
import {
  DeleteItem,
  ImgContainer,
  ItemContainer,
  ItemInfoConatainer,
  QtyBtns,
  QtyContainer,
} from './CartItemStd'

export const CartItem = ({ img, title }) => {
  return (
    <ItemContainer>
      <ImgContainer>
        <img src={img} alt={title} />
      </ImgContainer>
      <ItemInfoConatainer>
        <p>ALBUM TITLE</p>
        <p>ARTIST NAME</p>
        <p>DURATION</p>
        <p>LABEL</p>
      </ItemInfoConatainer>
        <QtyContainer>
          <QtyBtns>
            <div>-</div>
            <div>5</div>
            <div>+</div>
          </QtyBtns>
          <DeleteItem>bor</DeleteItem>
        </QtyContainer>
    </ItemContainer>
  )
}
