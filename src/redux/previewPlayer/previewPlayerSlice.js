import { createSlice } from '@reduxjs/toolkit'
import albumData from '../../data/albumProtoTest.json'

const INTIAL_STATE = {
  album: albumData,
  fetchingPreview: false,
  albumPreviewHidden: true,
  imagePreview: false,
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
        albumPreviewHidden: false,
      }
    },
    fetchingPreview: (state) => ({ ...state, fetchingPreview: true }),
    hideAlbumPreview: (state, action) => ({
      ...state,
      albumPreviewHidden: action.payload,
      isPlaying: false,
    }),
    setImagePreview: (state, action) => ({
      ...state,
      imagePreview: action.payload,
    }),
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

export const {
  setAlbumPreview,
  fetchingPreview,
  hideAlbumPreview,
  setImagePreview,
  setPlaying,
} = previewPlayerSlice.actions
export default previewPlayerSlice.reducer
