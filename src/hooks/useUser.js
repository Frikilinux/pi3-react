import axios from 'axios'
import { NUCBAZ_API } from '../constants/apiUrls'
import { useDispatch } from 'react-redux'
import {
  loggedUser,
  setUserError,
  setUserFetching,
} from '../redux/user/userSlice'

export const useUser = () => {
  const dispatch = useDispatch()
  const { ROOT, LOGIN, API_PROXY, REGISTER } = NUCBAZ_API

  const loginUser = async ({ email, password }) => {
    try {
      dispatch(setUserFetching(true))
      const res = await axios.post(API_PROXY + ROOT + LOGIN, {
        email,
        password,
      })
      console.log(res)
      dispatch(loggedUser(res.data), setUserFetching(false))
      return res.data
    } catch (error) {
      // const { msg } = error.response.data
      console.log('ERROR', error.response.data.msg)
      dispatch(setUserError(error.response.data.msg), setUserFetching(false))
    }
  }

  const registerUser = async ({ name, email, password }) => {
    try {
      setUserFetching(true)
      const res = await axios.post(API_PROXY + ROOT + REGISTER, {
        nombre: name,
        email,
        password,
        // como para probar
        img: `https://robohash.org/${name}?set=set3`,
      })

      setUserFetching(false)

      console.log('RESPONSE OF REGISTER', res)
      return {}
    } catch (error) {
      const { msg } = error.response.data
      console.log(msg)
      dispatch(setUserError(msg), setUserFetching(false))
    }
  }

  return { loginUser, registerUser }
}
