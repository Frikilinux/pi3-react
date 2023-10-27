import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  orders: null,
  fetchingOrders: false,
  ordersError: null,
  orderCreated: false,
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState: INITIAL_STATE,
  reducers: {
    setFetchingOrders: (state, action) => {
      return {
        ...state,
        fetchingOrders: action.payload,
      }
    },
    setOrders: (state, action) => {
      return {
        ...state,
        ordersError: null,
        orders: [...action.payload],
      }
    },
    setOrderError: (state, action) => {
      return {
        ...state,
        ordersError: action.payload,
      }
    },
    resetError: (state) => ({ ...state, ordersError: null }),
  },
})

export const { setOrders, setOrderError, setFetchingOrders, resetError } =
  ordersSlice.actions

export default ordersSlice.reducer
