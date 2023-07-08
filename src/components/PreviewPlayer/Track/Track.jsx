import React, { useRef } from 'react'
import { TrackContainer } from './TrackStd'
import formatTime from '../../../utils/fomatedTime'

const Track = ({ title, preview, duration }) => {
  const songElement = useRef()

  return (
    <TrackContainer onClick={() => songElement.current.play()}>
      <p>
        {title} {formatTime(duration)}
      </p>
      <audio ref={songElement} src={preview}></audio>
    </TrackContainer>
  )
}

export default Track
