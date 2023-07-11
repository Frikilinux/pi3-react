import React from 'react'
import {
  AlbumHeaders,
  AlbumImg,
  AlbumInfoContainer,
  AlbumTracksContainer,
  ButtonsContainer,
  ExplicitFrame,
  ExtraInfoContainer,
  InfoArtist,
  InfoTitle,
  PreviewContainer,
  SingleFrame,
} from './PreviewPlayerStd'
import Track from './Track/Track'
import { useDispatch, useSelector } from 'react-redux'
import { hidePreview } from '../../redux/previewPlayer/previewPlayerSlice'
import ButtonPrimary from '../UI/Button/ButtonPrimary'
import formatTime from '../../utils/fomatedTime'
import formatedDate from '../../utils/formatedDate'

const PreviewPlayer = () => {
  const { album } = useSelector((state) => state.previewPlayer)
  const {
    cover_medium: cover,
    tracks,
    artist,
    id,
    title,
    label,
    nb_tracks: nbTracks,
    duration,
    release_date: release,
    fans,
    record_type: recordType,
    explicit_lyrics: explicitLyrics,
  } = album
  const distpatch = useDispatch()
  const { h, m, s } = formatTime(duration)
  const { day, month, year } = formatedDate(release)

  return (
    <PreviewContainer
      imgsrc={artist.picture_xl}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      // key='preview'
    >
      <ExtraInfoContainer>
        {explicitLyrics && <ExplicitFrame>Explicit</ExplicitFrame>}
        <SingleFrame>{recordType}</SingleFrame>
        <div>Likes {fans}</div>
      </ExtraInfoContainer>
      <AlbumHeaders>
        <AlbumInfoContainer>
          <InfoTitle>{title}</InfoTitle>
          <InfoArtist>{artist.name}</InfoArtist>
          <div>{label}</div>
          <div>
            {nbTracks} tracks - {h > 0 ? `${h} hr ` : null} {`${m} min`}{' '}
          </div>
          <div></div>
          <div>{day + '-' + month + '-' + year} </div>
        </AlbumInfoContainer>
        <AlbumImg src={cover} />
      </AlbumHeaders>

      <AlbumTracksContainer>
        {tracks.data?.map((track, i) => (
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
