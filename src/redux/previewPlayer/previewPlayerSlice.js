import { createSlice } from '@reduxjs/toolkit'
import albumData from '../../data/albumProtoTest.json'

const INTIAL_STATE = {
  album: albumData,
  fetchingPreview: false,
  isHidden: true,
  isPlaying: true,
  curentTrack: null,
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
  },
})

export const { setAlbumPreview, fetchingPreview, hidePreview } = previewPlayerSlice.actions
export default previewPlayerSlice.reducer
