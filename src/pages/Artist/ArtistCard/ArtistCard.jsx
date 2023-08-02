import React from 'react'
import {
  ArrtistChartposition,
  ArtistCardContainer,
  ArtistCardImg,
} from './ArtistCardStd'
import { useNavigate } from 'react-router-dom'

const ArtistCard = (props) => {
  const { name, picture_medium: pictureMedium, id, position } = props
  const navigate = useNavigate()

  return (
    <ArtistCardContainer onClick={() => navigate(`/artist/${id}`)}>
      <ArtistCardImg src={pictureMedium} />
      {/* <div>{name}</div> */}
      <ArrtistChartposition>
        {position} <p>{name}</p>{' '}
      </ArrtistChartposition>
    </ArtistCardContainer>
  )
}

export default ArtistCard
