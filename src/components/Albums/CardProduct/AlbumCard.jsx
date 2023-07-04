import React from 'react'
import {
  CardContainer,
  ExplicitFrame,
  ImagesContainer,
  InfoContainer,
  MainImg,
  SingleFrame,
  TitleContainer,
} from './AlbumCardStd'
import formatTime from '../../../utils/fomatedTime'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cart/cartSlice'
import { Button } from '../../UI/Button/Button'

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
    record_type: recordType,
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
        {recordType === 'single' && <SingleFrame>S</SingleFrame>}
        {explicit && <ExplicitFrame>E</ExplicitFrame>}
      </ImagesContainer>
      <InfoContainer>
        <div>
          <p>{`${releaseDate.split('-').reverse().join('/')}`}</p>
          <p>{`${tracks.data.length}`} tracks</p>
          <p>{formatTime(duration)} mins</p>
        </div>
        <div>
          <p>$ {price} </p>
          <Button
            onClick={() => {
              dispatch(addToCart(props))
            }}
          >
            CART
          </Button>
        </div>

        {console.log({ props })}
      </InfoContainer>
    </CardContainer>
  )
}

export default AlbumCard
