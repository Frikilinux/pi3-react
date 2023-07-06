import React from 'react'
import {
  AlbumHeaders,
  AlbumImg,
  AlbumInfoContainer,
  AlbumTracksContainer,
  PreviewContainer,
} from './PreviewPlayerStd'

const PreviewPlayer = ({ cover_xl: cover }) => {
  return (
    <PreviewContainer>
      <AlbumHeaders>
        <AlbumImg src={cover} />
        <AlbumInfoContainer></AlbumInfoContainer>
      </AlbumHeaders>

      <AlbumTracksContainer></AlbumTracksContainer>
    </PreviewContainer>
  )
}

export default PreviewPlayer
