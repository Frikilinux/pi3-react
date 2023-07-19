import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  orders: null,
  isFetchingOrders: false,
  ordersError: null,
  orderCreated: false
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState: INITIAL_STATE,
  reducers: {
    fechingOrders: (state, action) => {
      return {
        ...state,
        isFetchingOrders: action.payload,
      }
    },
    getOrderSuccess: (state, action) => {
      return {
        ...state,
        isFetchingOrders: false,
        ordersError: null,
        orders: [...action.payload],
      }
    },
    ordersActionFail: (state, action) => {
      return {
        ...state,
        isFetchingOrders: false,
        ordersError: action.payload,
      }
    },
    resetError: (state) => ({...state, ordersError: null})
  },
})

export const { getOrderSuccess, ordersActionFail, fechingOrders, resetError } =
  ordersSlice.actions

export default ordersSlice.reducer
