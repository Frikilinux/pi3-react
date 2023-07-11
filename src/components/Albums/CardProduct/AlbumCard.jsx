import React from 'react'
import {
  CardContainer,
  ImagesContainer,
  InfoContainer,
  MainImg,
  TitleContainer,
} from './AlbumCardStd'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cart/cartSlice'
import { useAlbums } from '../../../hooks/useAlbums'
import ButtonPrimary from '../../UI/Button/ButtonPrimary'

const AlbumCard = (props) => {
  const {
    id,
    title,
    cover_medium: coverMedium,
    release_date: releaseDate,
    artist,
    price,
  } = props
  const noImg = 'https://cloud.ztec.ml/s/Y7G3JX4FxE5zKaz/download'
  const dispatch = useDispatch()
  const { fetchAlbumById } = useAlbums()

  return (
    <CardContainer id={id}>
      <ImagesContainer onClick={() => fetchAlbumById(id)}>
        <TitleContainer>
          <p>{title}</p>
          <p>{artist.name}</p>
        </TitleContainer>
        <MainImg imgsrc={coverMedium ?? noImg} />
        {/* {recordType === 'single' && <SingleFrame>S</SingleFrame>} */}
        {/* {explicit && <ExplicitFrame>E</ExplicitFrame>} */}
      </ImagesContainer>
      <InfoContainer>
        {/* <div> */}
        {/* <p>{`${releaseDate.split('-').reverse().join('/')}`}</p> */}
        {/* <p>{`${tracks.data.length}`} tracks</p> */}
        {/* <p>{formatTime(duration)} mins</p> */}
        {/* </div> */}
        <div>
          <p>$ {price} </p>
          <ButtonPrimary
            onClick={() => {
              dispatch(addToCart(props))
            }}
          >
            Add
          </ButtonPrimary>
        </div>

        {/* {console.log({ props })} */}
      </InfoContainer>
    </CardContainer>
  )
}

export default AlbumCard
