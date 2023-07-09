import React, { useRef, useEffect } from 'react'
import { TrackContainer } from './TrackStd'
import formatTime from '../../../utils/fomatedTime'
import { useDispatch, useSelector } from 'react-redux'
import { setPlaying } from '../../../redux/previewPlayer/previewPlayerSlice'
import { current } from '@reduxjs/toolkit'

const Track = ({ id, title, preview, duration }) => {
  const songElement = useRef()
  const dispatch = useDispatch()
  const { isPlaying, currentTrack } = useSelector(
    ({ previewPlayer }) => previewPlayer
  )

  const handleClick = (id) => {
    dispatch(setPlaying(id))
  }

  useEffect(() => {
    isPlaying && id === currentTrack
      ? songElement.current.play()
      : songElement.current.pause()
  }, [currentTrack, isPlaying, id])

  return (
    <TrackContainer id={id} onClick={() => handleClick(id)}>
      <p>
        {title} {formatTime(duration)}
      </p>
      <audio ref={songElement} src={preview}></audio>
    </TrackContainer>
  )
}

export default Track
