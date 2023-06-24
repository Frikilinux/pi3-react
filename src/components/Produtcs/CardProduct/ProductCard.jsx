import React from 'react'
import {
  CardContainer,
  ImagesContainer,
  MainImg,
  SecondaryImg,
  SecondaryImgsContainer,
} from './ProductCardStd'

const ProductCard = ({
  id,
  title,
  cover_small,
  cover_medium,
  cover_big,
  release_date: releaseDate,
  artist,
}) => {
  const noImg = 'https://cloud.ztec.ml/s/Y7G3JX4FxE5zKaz/download'
  return (
    <CardContainer id={id}>
      <ImagesContainer>
        <MainImg imgsrc={cover_big ?? noImg} />
        <SecondaryImgsContainer>
          <SecondaryImg imgsrc={cover_small ?? noImg} />
          <SecondaryImg imgsrc={cover_medium ?? noImg} />
        </SecondaryImgsContainer>
      </ImagesContainer>
      <h2>{title}</h2>
      <h3>{artist.name}</h3>
      <h5>
        {`Release: ${releaseDate.split('-').reverse().join('/')}`}
      </h5>
      <div>
        <button>Buy</button> <button>ADD TO CART</button>
      </div>
    </CardContainer>
  )
}

export default ProductCard
