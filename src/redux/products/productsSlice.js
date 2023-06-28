import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  products: [],
  isFetching: false,
  isError: null,
  next: null,
  currentGenre: null,
  total: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {
    getProducts: (state, { payload }) => {
      const { albums, next, currentGenre, total } = payload
      return {
        ...state,
        products: [...albums],
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
        products: [...state.products, ...albums],
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

export const { isFetching, isError, getProducts, nextAlbumsPage } = productsSlice.actions

export default productsSlice.reducer
