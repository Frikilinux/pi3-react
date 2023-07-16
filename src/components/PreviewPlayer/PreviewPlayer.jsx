import React from 'react'
import {
  AlbumHeaders,
  AlbumImg,
  AlbumInfoContainer,
  AlbumTracksContainer,
  ButtonsContainer,
  ExtraInfo,
  ExtraInfoContainer,
  GenreFrame,
  InfoArtist,
  InfoContrib,
  InfoFrame,
  InfoTitle,
  PreviewContainer,
} from './PreviewPlayerStd'
import Track from './Track/Track'
import { useDispatch, useSelector } from 'react-redux'
import { hidePreview } from '../../redux/previewPlayer/previewPlayerSlice'
import ButtonPrimary from '../UI/Button/ButtonPrimary'
import formatTime from '../../utils/fomatedTime'
import formatedDate from '../../utils/formatedDate'
import { addToCart } from '../../redux/cart/cartSlice'
import { useAlbums } from '../../hooks/useAlbums'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const PreviewPlayer = (props) => {
  const { getAlbumsByGenre } = useAlbums()
  const dispatch = useDispatch()
  const { album } = useSelector((state) => state.previewPlayer)
  const navigate = useNavigate()
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
    genres,
    contributors,
  } = album
  const distpatch = useDispatch()
  const { h, m, s } = formatTime(duration)
  const { day, month, year } = formatedDate(release)
  const { user } = useSelector(({ user }) => user)

  const handleAddToCart = () => {
    if (!user) return
    dispatch(addToCart(props))
    toast.error(`Album added`)
  }

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
        <ButtonPrimary onClick={() => distpatch(hidePreview(true))}>
          ←
        </ButtonPrimary>
        <ExtraInfo>
          {console.log('GENRES TRAKS', genres)}
          {explicitLyrics && <InfoFrame>Explicit</InfoFrame>}
          <InfoFrame>{recordType}</InfoFrame>
          {genres.data?.map(({ name, id }) => (
            <GenreFrame
              key={id}
              onClick={() => {
                getAlbumsByGenre({ genreId: id })
                dispatch(hidePreview(true))
                navigate('/')
              }}
            >
              {name}
            </GenreFrame>
          ))}
          <div>♥ {fans}</div>
        </ExtraInfo>
      </ExtraInfoContainer>
      <AlbumHeaders>
        <AlbumInfoContainer>
          <InfoTitle>{title}</InfoTitle>
          <InfoArtist
            onClick={() => {
              navigate(`/artist/${artist.id}`)
              distpatch(hidePreview(true))
            }}
          >
            {artist.name}
          </InfoArtist>
          <InfoContrib>
            {contributors.length > 2 && 'Feat.'}

            {contributors?.slice(1).map(({ name, id }) => (
              <p
                key={id}
                onClick={() => {
                  navigate(`/artist/${id}`)
                  distpatch(hidePreview(true))
                }}
              >
                {name}
              </p>
            ))}
          </InfoContrib>
          <div></div>
        </AlbumInfoContainer>
        <AlbumImg src={cover} />
      </AlbumHeaders>

      <AlbumTracksContainer>
        {tracks.data?.map((track, i) => (
          <Track key={track.id} {...track} number={i + 1} />
        ))}
      </AlbumTracksContainer>
      <ButtonsContainer>
        <div>
          {nbTracks} tracks - {h > 0 ? `${h} hr ` : null} {`${m} min`} -{' '}
          {day + '-' + month + '-' + year} - © {label}
        </div>
        <ButtonPrimary disabled={!user} size='1.2' onClick={handleAddToCart}>
          Add
        </ButtonPrimary>
      </ButtonsContainer>
    </PreviewContainer>
  )
}

export default PreviewPlayer
