import React from 'react'
import {
  CardContainer,
  ImagesContainer,
  InfoContainer,
  MainImg,
  OverlayPreview,
  TitleContainer,
} from './AlbumCardStd'
import { useAlbums } from '../../../hooks/useAlbums'
import ButtonPrimary from '../../UI/Button/ButtonPrimary'
import useButtons from '../../../hooks/useButtons'
import { IconInfoSquareRounded } from '@tabler/icons-react'
import { useSelector } from 'react-redux'

const AlbumCard = (props) => {
  const { id, title, cover_medium: cover, price } = props

  const noImg = 'https://res.cloudinary.com/dixlr2ujp/image/upload/v1687388809/Integrador/no_image_available.jpg'
  const { fetchAlbumById } = useAlbums()
  const { user } = useSelector(({ user }) => user)
  const { artist: artistPage } = useSelector(({ artist }) => artist)
  const { handleAddToCart } = useButtons()

  const artist = props.artist ? props.artist.name : artistPage.name
  return (
    <CardContainer id={id}>
      <ImagesContainer>
        <OverlayPreview
          onClick={() => fetchAlbumById(id)}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, transition: { duration: 0.5 } }}
        >
          <IconInfoSquareRounded size={45} />
        </OverlayPreview>
        <TitleContainer>
          <p>{title}</p>
          <p>{artist}</p>
        </TitleContainer>
        <MainImg $imgsrc={cover ?? noImg} />
      </ImagesContainer>
      <InfoContainer>
        <div>
          <p>$ {price} </p>
          <ButtonPrimary
            disabled={!user}
            size='1.2'
            onClick={() => handleAddToCart({ id, title, cover, artist, price })}
          >
            Add
          </ButtonPrimary>
        </div>
      </InfoContainer>
    </CardContainer>
  )
}

export default AlbumCard
