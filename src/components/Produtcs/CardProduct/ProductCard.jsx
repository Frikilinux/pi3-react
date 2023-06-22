import React from 'react'
import {
  CardContainer,
  ImagesContainer,
  MainImg,
  SecondaryImg,
  SecondaryImgsContainer,
} from './ProductCardStd'

const ProductCard = ({ id, title, images, price, stock, description }) => {
  const noImg = 'https://cloud.ztec.ml/s/Y7G3JX4FxE5zKaz/download'
  return (
    <CardContainer id={id}>
      <ImagesContainer>
        <MainImg imgsrc={images[0]??noImg}/>
        <SecondaryImgsContainer>
          <SecondaryImg imgsrc={images[1]??noImg} />
          <SecondaryImg imgsrc={images[2]??noImg} />
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
