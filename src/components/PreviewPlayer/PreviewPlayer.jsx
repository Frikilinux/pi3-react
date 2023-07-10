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
  const { cover_medium: cover, tracks, artist, id } = album
  const distpatch = useDispatch()

  return (
    <PreviewContainer
      imgsrc={artist.picture_xl}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      key='preview'
    >
      <AlbumHeaders>
        <AlbumImg src={cover} />
        <AlbumInfoContainer></AlbumInfoContainer>
      </AlbumHeaders>

      <AlbumTracksContainer>
        {tracks?.data.map((track, i) => (
          <Track key={track.id} {...track} number={i + 1} />
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
