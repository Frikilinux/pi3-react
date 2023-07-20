import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  user: null,
  isUserFetching: false,
  userError: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    loggedUser: (state, action) => {
      return {
        ...state,
        user: { ...action.payload.usuario, token: action.payload.token },
        isUserFetching: false,
        userError: null,
      }
    },
    setUserFetching: (state) => {
      return {
        ...state,
        isUserFetching: true,
      }
    },
    logOut: () => {
      return {...INITIAL_STATE}
    },
    setUserError: (state, action) => {
      return {
        ...state,
        userError: action.payload,
      }
    },
  },
})

export const { loggedUser, setUserError, setUserFetching, logOut } = userSlice.actions

export default userSlice.reducer
