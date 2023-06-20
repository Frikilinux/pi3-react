import React from 'react'
import {
  CardContainer,
  ImagesContainer,
  MainImg,
  SecondaryImg,
  SecondaryImgsContainer,
} from './ProductCardStd'

const ProductCard = ({ id, title, images, price, stock, description }) => {
  return (
    <CardContainer id={id}>
      <ImagesContainer>
        <MainImg imgsrc={images[0]}/>
        <SecondaryImgsContainer>
          <SecondaryImg imgsrc={images[1]} />
          <SecondaryImg imgsrc={images[2]} />
        </SecondaryImgsContainer>
      </ImagesContainer>
      <h2>{title}</h2>
      <h3>$ {price}</h3>
      <h4>{description}</h4>
      <h3>En stock: {stock}</h3>
      <div>
        <button>Buy</button> <button>ADD TO CART</button>
      </div>
    </CardContainer>
  )
}

export default ProductCard
