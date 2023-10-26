import React from 'react'
import {
  CreatedDate,
  OrderAlbumQty,
  OrderCardInfo,
  OrderImgContainer,
  OrderItemsQty,
  OrederItemImg,
  SummaryOrderContainer,
} from './SummaryOrderStd'
import { formatOrderDate } from '../../utils/formatedDate'
import { useNavigate } from 'react-router-dom'

const SummaryOrder = ({ items, created, _id }) => {
  const totalItems = items?.reduce((acc, item) => acc + item.qty, 0)
  const navigate = useNavigate()
  return (
    <SummaryOrderContainer onClick={() => navigate(`/summary/order/${_id}`)}>
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
        <CreatedDate> {formatOrderDate(created)}</CreatedDate>
      </OrderCardInfo>
    </SummaryOrderContainer>
  )
}

export default SummaryOrder
