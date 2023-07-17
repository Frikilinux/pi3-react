import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  orders: null,
  fetching: false,
  error: null,
  created: false
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState: INITIAL_STATE,
  reducers: {
    fechingOrders: (state) => {
      return {
        ...state,
        fetching: true,
      }
    },
    getOrderSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        orders: [...action.payload],
      }
    },
    ordersActionFail: (state, action) => {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }
    },
  },
})

export const { getOrderSuccess, ordersActionFail, fechingOrders } =
  ordersSlice.actions

export default ordersSlice.reducer
