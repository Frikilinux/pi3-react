import React from 'react'
import {
  CardContainer,
  ExplicitFrame,
  ImagesContainer,
  InfoContainer,
  MainImg,
  TitleContainer,
} from './AlbumCardStd'
import formatTime from '../../../utils/fomatedTime'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cart/cartSlice'

const AlbumCard = (props) => {
  const {
    id,
    title,
    cover_medium: coverMedium,
    release_date: releaseDate,
    artist,
    tracks,
    explicit_lyrics: explicit,
    duration,
    price,
  } = props
  const noImg = 'https://cloud.ztec.ml/s/Y7G3JX4FxE5zKaz/download'
  const dispatch = useDispatch()

  return (
    <CardContainer id={id}>
      <TitleContainer>
        <p>{title}</p>
        <p>{artist.name}</p>
      </TitleContainer>
      <ImagesContainer>
        <MainImg imgsrc={coverMedium ?? noImg} />
        {explicit && <ExplicitFrame>E</ExplicitFrame>}
      </ImagesContainer>
      <InfoContainer>
        <p>{`Re ${releaseDate.split('-').reverse().join('/')}`}</p>
        <p>{`Tr ${tracks.data.length}`}</p>
        <p>Dur {formatTime(duration)}</p>
        <p>$ {price} </p>
        {console.log({ props })}
        <button onClick={() => {dispatch(addToCart(props))}}>buy</button>
      </InfoContainer>
    </CardContainer>
  )
}

export default AlbumCard
