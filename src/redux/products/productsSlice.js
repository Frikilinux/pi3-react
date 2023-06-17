import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  products: [],
  isFetching: false,
  isError: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {
    getProducts: (state, action) => {
      return {
        ...state,
        products: [...action.payload] ,
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

export const { isFetching, isError, getProducts } = productsSlice.actions

export default productsSlice.reducer
