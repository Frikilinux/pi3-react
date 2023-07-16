import React from 'react'
import {
  CardContainer,
  ImagesContainer,
  InfoContainer,
  MainImg,
  OverlayPreview,
  TitleContainer,
} from './AlbumCardStd'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../redux/cart/cartSlice'
import { useAlbums } from '../../../hooks/useAlbums'
import ButtonPrimary from '../../UI/Button/ButtonPrimary'
import { toast } from 'react-toastify'
import useButtons from '../../../hooks/useButtons'

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
  const { user } = useSelector(({ user }) => user)
  const {handleAddToCart} = useButtons()


  return (
    <CardContainer
      id={id}
      // whileHover={{ scale: 1.01, transition: { duration: 0.05 } }}
    >
      <ImagesContainer>
        <OverlayPreview
          onClick={() => fetchAlbumById(id)}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, transition: { duration: 0.5 } }}
        >
          🛈
        </OverlayPreview>
        <TitleContainer>
          <p>{title}</p>
          <p>{artist?.name}</p>
        </TitleContainer>
        <MainImg imgsrc={coverMedium ?? noImg} />
        {/* {recordType === 'single' && <SingleFrame>S</SingleFrame>} */}
        {/* {explicit && <ExplicitFrame>E</ExplicitFrame>} */}
      </ImagesContainer>
      <InfoContainer>
        <div>
          <p>$ {price} </p>
          <ButtonPrimary notLoggedIn={!user} size='1.2' onClick={() => handleAddToCart(props)}>
            Add
          </ButtonPrimary>
        </div>
      </InfoContainer>
    </CardContainer>
  )
}

export default AlbumCard
