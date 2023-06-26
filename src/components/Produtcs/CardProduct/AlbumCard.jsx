import React from 'react'
import {
  CardContainer,
  ImagesContainer,
  InfoContainer,
  MainImg,
  SecondaryImg,
  SecondaryImgsContainer,
} from './AlbumCardStd'
import formatTime from '../../../utils/fomatedTime'

const AlbumCard = ({
  id,
  title,
  cover_big: coverBig,
  release_date: releaseDate,
  artist,
  tracks,
  explicit_lyrics: explicit,
  duration
}) => {
  const noImg = 'https://cloud.ztec.ml/s/Y7G3JX4FxE5zKaz/download'
  return (
    <CardContainer id={id}>
      <ImagesContainer>
        <MainImg imgsrc={coverBig ?? noImg} />
      </ImagesContainer>
      <InfoContainer>
        <p>{`Release: ${releaseDate.split('-').reverse().join('/')}`}</p>
        <p>{`Tracks ${tracks.data.length}`}</p>
        <p>Duration {formatTime(duration)}</p>
        {
          explicit && <div>EXPLICIT</div>
        }
        {/* <div>
          <button>Buy</button> <button>ADD TO CART</button>
        </div> */}
      </InfoContainer>
      {/* <h2>{title}</h2>
      <h3>{artist.name}</h3> */}
    </CardContainer>
  )
}

export default AlbumCard
