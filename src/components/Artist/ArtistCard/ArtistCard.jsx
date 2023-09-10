import React from 'react'
import {
  ArtisChartArtistName,
  ArtistCardContainer,
  ArtistCardImg,
  ArtistChartposition,
  ArtistInfo,
  OverlayPreview,
} from './ArtistCardStd'
import { useNavigate } from 'react-router-dom'
import { IconInfoSquareRounded } from '@tabler/icons-react'

const ArtistCard = (props) => {
  const navigate = useNavigate()
  const noImg =
    'https://res.cloudinary.com/dixlr2ujp/image/upload/v1687388809/Integrador/no_image_available.jpg'
  const { name, picture_medium: pictureMedium, id, position } = props

  return (
    <ArtistCardContainer>
      <OverlayPreview
        onClick={() => navigate(`/artist/${id}`)}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        <IconInfoSquareRounded size={45} />
      </OverlayPreview>
      <ArtistCardImg $imgsrc={pictureMedium ?? noImg} />
      <ArtistInfo>
        {/* <ArtistChartposition>{position}</ArtistChartposition> */}
        <ArtisChartArtistName>{name}</ArtisChartArtistName>
      </ArtistInfo>
    </ArtistCardContainer>
  )
}

export default ArtistCard
