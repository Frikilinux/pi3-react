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

const AlbumCard = ({
  id,
  title,
  cover_medium: coverMedium,
  release_date: releaseDate,
  artist,
  tracks,
  explicit_lyrics: explicit,
  duration,
}) => {
  const noImg = 'https://cloud.ztec.ml/s/Y7G3JX4FxE5zKaz/download'
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
        <p>{`Release: ${releaseDate.split('-').reverse().join('/')}`}</p>
        <p>{`Tracks ${tracks.data.length}`}</p>
        <p>Duration {formatTime(duration)}</p>
      </InfoContainer>
    </CardContainer>
  )
}

export default AlbumCard
