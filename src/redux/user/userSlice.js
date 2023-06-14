import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  token: '',
  image: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {},
})

export default userSlice.reducer
