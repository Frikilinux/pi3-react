import React, { useRef, useEffect } from 'react'
import { TrackContainer } from './TrackStd'
import { useDispatch, useSelector } from 'react-redux'
import { setPlaying } from '../../../redux/previewPlayer/previewPlayerSlice'

const Track = ({ id, title, preview, duration, readable, number }) => {
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
    <TrackContainer id={id} onClick={() => handleClick(id)} playing={currentTrack === id}>
      <p>
        {number.toString().padStart(2, '0')} {' - '}{title}
        {!readable && '! No available for playing'}
      </p>
      <audio ref={songElement} src={preview}></audio>
    </TrackContainer>
  )
}

export default Track
