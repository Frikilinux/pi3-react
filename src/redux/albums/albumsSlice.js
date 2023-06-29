import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  albums: [],
  isFetching: false,
  isError: null,
  next: null,
  currentGenre: null,
  total: null,
}

const albumsSlice = createSlice({
  name: 'albums',
  initialState: INITIAL_STATE,
  reducers: {
    setAlbums: (state, { payload }) => {
      const { albums, next, currentGenre, total } = payload
      return {
        ...state,
        albums: [...albums],
        next,
        currentGenre,
        total,
        isFetching: false,
        isError: null,
      }
    },
    nextAlbumsPage: (state, { payload }) => {
      const { albums, next, currentGenre, total } = payload
      return {
        ...state,
        albums: [...state.albums, ...albums],
        next,
        currentGenre,
        total,
        isFetching: false,
        isError: null,
      }
    },
    isFetching: (state) => {
      return {
        ...state,
        isFetching: true,
      }
    },
    isError: (state, action) => {
      return {
        ...state,
        isError: action.payload,
      }
    },
  },
})

export const { isFetching, isError, setAlbums, nextAlbumsPage } = albumsSlice.actions

export default albumsSlice.reducer
