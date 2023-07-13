import React, { useRef, useEffect } from 'react'
import {
  ExplicitTrack,
  TrackArtist,
  TrackContainer,
  TrackTitle,
} from './TrackStd'
import { useDispatch, useSelector } from 'react-redux'
import { setPlaying } from '../../../redux/previewPlayer/previewPlayerSlice'

const Track = ({
  id,
  title,
  preview,
  duration,
  readable,
  number,
  contributors,
  explicit_content_lyrics: explicitLyrics,
  explicit_lyrics: explicit,
  artist,
}) => {
  const songElement = useRef()
  const dispatch = useDispatch()
  const { isPlaying, currentTrack } = useSelector(
    ({ previewPlayer }) => previewPlayer
  )

  const handleClick = (id) => {
    readable && dispatch(setPlaying(id))
  }

  useEffect(() => {
    isPlaying && id === currentTrack
      ? songElement.current.play()
      : songElement.current.pause()
  }, [currentTrack, isPlaying, id])

  return (
    <TrackContainer
      id={id}
      onClick={() => handleClick(id)}
      playing={currentTrack === id ? 1 : 0}
    >
      <TrackTitle>
        {/* {number.toString().padStart(2, '0')}
         {' - '} */}
        {title}
        {!readable && '! No available for playing'}
      </TrackTitle>
      <TrackArtist>
        {(explicitLyrics > 2 || explicit) && <ExplicitTrack>E</ExplicitTrack>}
        {artist.name}
      </TrackArtist>
      <audio ref={songElement} src={preview}></audio>
    </TrackContainer>
  )
}

export default Track
