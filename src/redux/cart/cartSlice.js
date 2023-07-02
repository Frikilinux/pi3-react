import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  items: [],
  totalPrice: 0,
  discount: 0,
  active: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    },
    cleanCart: (state) => (state = INITIAL_STATE),
  },
})

export const { addToCart, cleanCart } = cartSlice.actions
export default cartSlice.reducer
