import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  products: [],
  isFetching: false,
  isError: null,
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: INITIAL_STATE,
  reducers: {
    getCategories: (state, action) => {
      return {
        ...state,
        categories: [...action.payload],
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

export const { isFetching, isError, getCategories } = categoriesSlice.actions

export default categoriesSlice.reducer
