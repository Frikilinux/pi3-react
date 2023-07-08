import React from 'react'
import {
  AlbumHeaders,
  AlbumImg,
  AlbumInfoContainer,
  AlbumTracksContainer,
  PreviewContainer,
} from './PreviewPlayerStd'
import Track from './Track/Track'
import { useDispatch, useSelector } from 'react-redux'
import { hidePreview } from '../../redux/previewPlayer/previewPlayerSlice'

const PreviewPlayer = () => {
  const {album, isHidden} = useSelector((state) => state.previewPlayer)
  console.log('ALBUM IN PLAYER', album);
  const {cover_medium: cover, tracks } = album
  const distpatch = useDispatch()

  return (

    <PreviewContainer>
      <button onClick={() => distpatch(hidePreview(true))}>CERRAR</button>
      <AlbumHeaders>
        <AlbumImg src={cover} />
        <AlbumInfoContainer></AlbumInfoContainer>
      </AlbumHeaders>

      <AlbumTracksContainer>
        {
          tracks?.data.map((track) => <Track key={track.id} {...track} />
          )
        }
      </AlbumTracksContainer>
    </PreviewContainer>
  )
}

export default PreviewPlayer
