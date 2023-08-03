import React from 'react'
import {
  AlbumHeaders,
  AlbumImg,
  AlbumInfoContainer,
  AlbumPrice,
  AlbumTracksContainer,
  ButtonsContainer,
  ExtraInfo,
  ExtraInfoContainer,
  GenreFrame,
  InfoArtist,
  InfoContrib,
  InfoFrame,
  InfoLabel,
  InfoTitle,
  InfoTitleContainer,
  PreviewContainer,
  RecordTypeFrame,
  TracksInfo,
} from './PreviewPlayerStd'
import Track from './Track/Track'
import { useDispatch, useSelector } from 'react-redux'
import {
  hideAlbumPreview,
  setImagePreview,
} from '../../redux/previewPlayer/previewPlayerSlice'
import ButtonPrimary from '../UI/Button/ButtonPrimary'
import formatTime from '../../utils/fomatedTime'
import { formatedDate } from '../../utils/formatedDate'
import { useAlbums } from '../../hooks/useAlbums'
import { useNavigate } from 'react-router-dom'
import useButtons from '../../hooks/useButtons'
import Icons from '../../constants/icons'
import { formatQuantityNumber } from '../../utils/formatNumbers'

const PreviewPlayer = (props) => {
  const { getAlbumsByGenre } = useAlbums()
  const dispatch = useDispatch()
  const { album } = useSelector((state) => state.previewPlayer)
  const navigate = useNavigate()
  const {
    cover_medium: cover,
    cover_xl: coverXl,
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
    genres,
    contributors,
    price,
  } = album
  const distpatch = useDispatch()
  const { h, m } = formatTime(duration)
  const { day, month, year } = formatedDate(release)
  const { user } = useSelector(({ user }) => user)
  const { handleAddToCart, handleArtistPage } = useButtons()
  const { BackArrow } = Icons

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
      key='preview'
    >
      <ExtraInfoContainer>
        <ButtonPrimary onClick={() => distpatch(hideAlbumPreview(true))}>
          <BackArrow size='1.3em' />
        </ButtonPrimary>

        <ExtraInfo>
          {explicitLyrics && <InfoFrame>Explicit</InfoFrame>}
          <RecordTypeFrame>{recordType}</RecordTypeFrame>
          {genres.data?.map(({ name, id }) => (
            <GenreFrame
              key={id}
              onClick={() => {
                getAlbumsByGenre({ genreId: id })
                dispatch(hideAlbumPreview(true))
                navigate('/albums')
              }}
            >
              {name}
            </GenreFrame>
          ))}
          <div>♥ {formatQuantityNumber(fans)}</div>
        </ExtraInfo>
      </ExtraInfoContainer>
      <AlbumHeaders>
        <AlbumInfoContainer>
          <InfoTitleContainer>
            <InfoTitle>{title}</InfoTitle>
            <InfoArtist
              onClick={() => {
                handleArtistPage(artist.id)
              }}
            >
              {artist.name}
            </InfoArtist>
            <InfoContrib>
              {contributors.length > 1 && 'Feat:'}

              {contributors?.slice(1).map(({ name, id }) => (
                <p
                  key={id}
                  onClick={() => {
                    handleArtistPage(id)
                  }}
                >
                  {name}
                </p>
              ))}
            </InfoContrib>
          </InfoTitleContainer>
          <TracksInfo>
            {nbTracks} {nbTracks > 1 ? 'tracks' : 'track'} •{' '}
            {h > 0 ? `${h} hr ` : null} {`${m} min`} •{' '}
            {day + '/' + month + '/' + year}{' '}
          </TracksInfo>
        </AlbumInfoContainer>
        <AlbumImg
          onClick={() => dispatch(setImagePreview(coverXl))}
          src={cover}
        />
      </AlbumHeaders>

      <AlbumTracksContainer>
        {tracks.data?.map((track, i) => (
          <Track key={track.id} {...track} number={i + 1} />
        ))}
      </AlbumTracksContainer>
      <ButtonsContainer>
        <InfoLabel>© {label}</InfoLabel>
        <AlbumPrice>$ {price}</AlbumPrice>
        <ButtonPrimary
          notLoggedIn={!user}
          size='1.2'
          onClick={() =>
            handleAddToCart({ id, title, cover, artist: artist.name, price })
          }
        >
          Add
        </ButtonPrimary>
      </ButtonsContainer>
    </PreviewContainer>
  )
}

export default PreviewPlayer
