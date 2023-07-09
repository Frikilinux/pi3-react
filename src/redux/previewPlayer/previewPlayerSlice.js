import { createSlice } from '@reduxjs/toolkit'
import albumData from '../../data/albumProtoTest.json'

const INTIAL_STATE = {
  album: albumData,
  fetchingPreview: false,
  isHidden: true,
  isPlaying: false,
  currentTrack: null,
}

const previewPlayerSlice = createSlice({
  name: 'previewPlayer',
  initialState: INTIAL_STATE,
  reducers: {
    setAlbumPreview: (state, action) => {
      return {
        ...state,
        album: action.payload,
        fetchingPreview: false,
        isHidden: false,
      }
    },
    fetchingPreview: (state) => ({ ...state, fetchingPreview: true }),
    hidePreview: (state, action) => ({ ...state, isHidden: action.payload }),
    setPlaying: (state, action) => ({
      ...state,
      currentTrack: action.payload,
      isPlaying:
        state.currentTrack === action.payload ? !state.isPlaying : true,
    }),
    setPause: (state, action) => ({
      ...state,
      isPlaying: !state.currentTrack === action.payload,
    }),
  },
})

export const { setAlbumPreview, fetchingPreview, hidePreview, setPlaying } =
  previewPlayerSlice.actions
export default previewPlayerSlice.reducer
