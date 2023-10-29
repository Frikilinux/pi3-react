import React from 'react'
import {
  AlbumCardData,
  OrderAlbumArtist,
  OrderAlbumTitle,
  OrderCardContainer,
  OrderCardDataInfo,
  OrderCardImg,
} from './OrderCardStd'
import { IconPointFilled } from '@tabler/icons-react'

const OrderCard = (item) => {
  const { cover, id, title, artist, qty, price } = item
  return (
    <OrderCardContainer>
      <div>#{id}</div>
      <AlbumCardData>
        <OrderCardImg src={cover} alt={title} />
        <OrderCardDataInfo>
          <OrderAlbumTitle>{title}</OrderAlbumTitle>
          <OrderAlbumArtist>{artist}</OrderAlbumArtist>
        </OrderCardDataInfo>
      </AlbumCardData>

      <p>
        Price: ${price} <IconPointFilled size={10} /> Quatity: {qty}{' '}
        <IconPointFilled size={10} /> total: ${qty * price}
      </p>
    </OrderCardContainer>
  )
}

export default OrderCard
