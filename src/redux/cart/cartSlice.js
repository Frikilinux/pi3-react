import { createSlice } from '@reduxjs/toolkit'
import { addAlbumHandler, removeAlbumHandler } from './cartUtils'

const INITIAL_STATE = {
  items: [],
  totalPrice: 0,
  discount: 0,
  hidden: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        items: addAlbumHandler(state.items, action.payload),
      }
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        items: removeAlbumHandler(state.items, action.payload),
      }
    },
    removeAlbum: (state, action) => {
      return {
        ...state,
        items: state.items.filter((album) => album.id !== action.payload),
      }
    },
    cleanCart: (state) => (state = INITIAL_STATE),
    hideCart: (state) => ({ ...state, hidden: !state.hidden }),
  },
})

export const { addToCart, removeFromCart, removeAlbum, cleanCart, hideCart } =
  cartSlice.actions
export default cartSlice.reducer
