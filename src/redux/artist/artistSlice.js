import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  artist: {},
  artistList: [],
  isFetchingArtist: false,
  isError: false,
}

const artistSlice = createSlice({
  name: 'artist',
  initialState: INITIAL_STATE,
  reducers: {
    setArtist: (state, action) => ({
      ...state,
      artist: action.payload,
      isFetchingArtist: false,
      isError: false,
    }),
    setFetchingArtist: (state, action) => ({
      ...state,
      isFetchingArtist: action.payload,
    }),
    setArtistList: (state, action) => ({
      ...state,
      artistList: action.payload,
      isFetchingArtist: false,
    }),
    setError: (state, action) => ({ ...state, isError: action.payload }),
  },
})

export const { setArtist, setFetchingArtist, setError, setArtistList } =
  artistSlice.actions
export default artistSlice.reducer
