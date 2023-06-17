import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  user: null,
  isLogin: false,
  isError: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    loggedUser: (state, action) => {
      return {
        ...state,
        user: { ...action.payload },
        isLogin: false,
        isError: null,
      }
    },
    isLogin: (state) => {
      return {
        ...state,
        isLogin: true,
      }
    },
    logOut: () => {
      return {...INITIAL_STATE}
    },
    isError: (state, action) => {
      return {
        ...state,
        isError: action.payload,
      }
    },
  },
})

export const { loggedUser, isError, isLogin, logOut } = userSlice.actions

export default userSlice.reducer
