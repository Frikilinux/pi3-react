import React from 'react'
import {
  AlbumHeaders,
  AlbumImg,
  AlbumInfoContainer,
  AlbumTracksContainer,
  ButtonsContainer,
  PreviewContainer,
} from './PreviewPlayerStd'
import Track from './Track/Track'
import { useDispatch, useSelector } from 'react-redux'
import { hidePreview } from '../../redux/previewPlayer/previewPlayerSlice'
import ButtonPrimary from '../UI/Button/ButtonPrimary'

const PreviewPlayer = () => {
  const { album, isHidden } = useSelector((state) => state.previewPlayer)
  console.log('ALBUM IN PLAYER', album)
  const { cover_medium: cover, tracks, artist } = album
  const distpatch = useDispatch()

  return (
    <PreviewContainer imgsrc={artist.picture_xl}>
      <AlbumHeaders>
        <AlbumImg src={cover} />
        <AlbumInfoContainer></AlbumInfoContainer>
      </AlbumHeaders>

      <AlbumTracksContainer>
        {tracks?.data.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </AlbumTracksContainer>
      <ButtonsContainer>
        <ButtonPrimary onClick={() => distpatch(hidePreview(true))}>
          CERRAR
        </ButtonPrimary>
      </ButtonsContainer>
    </PreviewContainer>
  )
}

export default PreviewPlayer
