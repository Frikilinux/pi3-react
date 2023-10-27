import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  user: null,
  fetchingUser: false,
  userError: null,
  isModalHidden: true,
}

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    loggedUser: (state, action) => {
      return {
        ...state,
        user: { ...action.payload.user, token: action.payload.token },
        userError: null,
      }
    },
    setFechingUser: (state, action) => {
      return {
        ...state,
        fetchingUser: action.payload,
      }
    },
    logOut: () => {
      return { ...INITIAL_STATE }
    },
    setUserError: (state, action) => {
      return {
        ...state,
        userError: action.payload,
      }
    },
    setIsModalHidden: (state, action) => ({
      ...state,
      isModalHidden: action.payload,
    }),
  },
})

export const {
  loggedUser,
  setUserError,
  setFechingUser,
  logOut,
  setIsModalHidden,
} = userSlice.actions

export default userSlice.reducer
