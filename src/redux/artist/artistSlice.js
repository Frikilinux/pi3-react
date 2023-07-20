import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  artist: {},
  isFetchingArtist: false,
  isError: false,
}

const artistSlice = createSlice({
  name: 'artist',
  initialState: INITIAL_STATE,
  reducers: {
    setArtist: (state, action) => {
      return {
        ...state,
        artist: action.payload,
        isFetchingArtist: false,
        isError: false,
      }
    },
    setFetchingArtist: (state, action) => ({
      ...state,
      isFetchingArtist: action.payload,
    }),
    setError: (state, action) => ({ ...state, isError: action.payload }),
  },
})

export const { setArtist, setFetchingArtist, setError } = artistSlice.actions
export default artistSlice.reducer
