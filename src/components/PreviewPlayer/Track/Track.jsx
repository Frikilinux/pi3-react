import React, { useRef, useEffect, useState } from 'react'
import {
  ExplicitTrack,
  TrackArtist,
  TrackContainer,
  TrackData,
  TrackNumber,
  TrackTitle,
} from './TrackStd'
import { useDispatch, useSelector } from 'react-redux'
import {
  hidePreview,
  setPlaying,
} from '../../../redux/previewPlayer/previewPlayerSlice'
import Icons from '../../../constants/icons'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { currentTrack } = useSelector(({ previewPlayer }) => previewPlayer)
  const [mouseHover, setMouseOver] = useState(false)
  const [trackPlaying, setTrackPlaying] = useState(false)
  const [paused, setPaused] = useState(false)
  const Play = Icons[trackPlaying || mouseHover ? 'play' : 'pause']

  const handleClick = (id) => {
    if (readable) {
      dispatch(setPlaying(id))
      !trackPlaying ? songElement.current.play() : songElement.current.pause()
    }
  }

  useEffect(() => {
    if (currentTrack !== id) {
      songElement.current.pause()
      songElement.current.currentTime = 0
    }
  }, [currentTrack, id])

  // console.log('IS PLAYING???', songElement.current)

  return (
    <TrackContainer
      id={id}
      playing={currentTrack === id ? 1 : 0}
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
    >
      <TrackNumber>
        {mouseHover || (currentTrack === id && (trackPlaying || paused)) ? (
          <Play
            onClick={() => handleClick(id)}
            size='2em'
            color='var(--grey)'
          />
        ) : (
          <div>{number}</div>
        )}
      </TrackNumber>
      <TrackData>
        <TrackTitle
          onClick={() => handleClick(id)}
          playing={currentTrack === id ? 1 : 0}
        >
          {title}
          {!readable && '! No available for playing'}
        </TrackTitle>
        <TrackArtist
          onClick={() => {
            navigate(`/artist/${artist.id}`)
            dispatch(hidePreview(true))
          }}
        >
          {(explicitLyrics > 2 || explicit) && <ExplicitTrack>E</ExplicitTrack>}
          {artist.name}
        </TrackArtist>
      </TrackData>

      <audio
        onPlaying={() => {
          setTrackPlaying(true)
          setPaused(false)
        }}
        onPause={() => {
          setPaused(true)
          setTrackPlaying(false)
        }}
        onEnded={() => {
          setPlaying(false)
          setPaused(false)
        }}
        ref={songElement}
        src={preview}
      ></audio>
    </TrackContainer>
  )
}

export default Track
