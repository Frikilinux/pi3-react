import React from 'react'
import {
  CreatedDate,
  OrderAlbumQty,
  OrderCardInfo,
  OrderContainer,
  OrderImgContainer,
  OrderItemsQty,
  OrederItemImg,
} from './SummaryOrderStd'
import { formatOrderDate } from '../../utils/formatedDate'

const SummaryOrder = ({ items, createdAt }) => {
  const totalItems = items?.reduce((acc, item) => acc + item.qty, 0)

  return (
    <OrderContainer>
      <OrderImgContainer>
        {items?.slice(0, 3).map(({ cover, id, title }) => {
          return (
            <OrederItemImg
              key={id}
              src={cover}
              alt={`Album image of ${title}`}
            />
          )
        })}
      </OrderImgContainer>
      <OrderCardInfo>
        <OrderAlbumQty>{items.length} Albums</OrderAlbumQty>
        <OrderItemsQty>{totalItems} Items</OrderItemsQty>
        <CreatedDate> {formatOrderDate(createdAt)}</CreatedDate>
      </OrderCardInfo>
    </OrderContainer>
  )
}

export default SummaryOrder
