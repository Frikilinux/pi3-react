import React from 'react'
import { OrderAlbumQty, OrderContainer, OrderImgContainer, OrderItemsQty, OrederItemImg } from './SummaryOrderStd'

const SummaryOrder = ({ _id, user, price, total, status, items }) => {
  const totalItems = items?.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <OrderContainer>

      <OrderImgContainer>
        {
          items?.slice(0,3).map(({img, id, title}) => {
            return <OrederItemImg key={id} src={img} alt={`Album image of ${title}`}/>
          })
        }

      </OrderImgContainer>

      <div>
        <OrderAlbumQty>{items.length} albums</OrderAlbumQty>
        <OrderItemsQty>{totalItems} items</OrderItemsQty>
        <p></p>
      </div>
    </OrderContainer>
  )
}

export default SummaryOrder
