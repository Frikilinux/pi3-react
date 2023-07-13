import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  artist: null,
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
        fetchingArtist: false,
        isError: false,
      }
    },
    fetchingArtist: (state) => ({ ...state, isFetchingArtist: true }),
    setError: (state, action) => ({...state, isError: action.payload,})
  },
})

export const { setArtist, fetchingArtist, setError } = artistSlice.actions
export default artistSlice.reducer
