import React from 'react'
import {
  ArtisChartArtistName,
  ArtistCardContainer,
  ArtistCardImg,
  ArtistChartArtistStatus,
  ArtistChartposition,
} from './ArtistCardStd'
import { useNavigate } from 'react-router-dom'

const ArtistCard = (props) => {
  const { name, picture_medium: pictureMedium, id, position } = props
  const navigate = useNavigate()

  return (
    <ArtistCardContainer onClick={() => navigate(`/artist/${id}`)}>
      <ArtistCardImg src={pictureMedium} />
      <ArtistChartArtistStatus>
        <ArtistChartposition>{position}</ArtistChartposition>
        <ArtisChartArtistName>{name}</ArtisChartArtistName>
      </ArtistChartArtistStatus>
    </ArtistCardContainer>
  )
}

export default ArtistCard
