import { createSlice } from '@reduxjs/toolkit'

const INTIAL_STATE = {
  tracks: [],
  isHidden: true,
  isPlaying: true,
  curentTrack: null,
}

const PreviewPlayer = createSlice({
  name: 'player',
  initialState: INTIAL_STATE,
})
