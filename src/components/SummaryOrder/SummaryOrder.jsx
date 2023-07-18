import React from 'react'

const SummaryOrder = ({ _id, user, price, total, items }) => {
  const totalItems = items.reduce((acc, item) => {
    acc += item.quantity
    return acc
  }, 0)
  
  return (
    <div>
      <div>
        <img src={items[0].img} alt={`Album image of ${items[0].title}`} />
        <img src={items[1].img} alt={`Album image of ${items[2].title}`} />
        <img src={items[2].img} alt={`Album image of ${items[3].title}`} />
      </div>

      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  )
}

export default SummaryOrder
