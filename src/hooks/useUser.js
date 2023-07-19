import axios from 'axios'
import {  NUCBAZ_API } from '../constants/apiUrls'
import { useDispatch } from 'react-redux'
import { isError, isLogin, loggedUser } from '../redux/user/userSlice'

export const useUser = () => {
  const dispatch = useDispatch()
  const { ROOT, LOGIN, API_PROXY, REGISTER } = NUCBAZ_API

  const loginUser = async ({ email, password }) => {
    try {
      dispatch(isLogin())
      const res = await axios.post(API_PROXY + ROOT + LOGIN, {
        email,
        password,
      })
      console.log(res);
      dispatch(loggedUser(res.data))
      return (res.data)
    } catch (error) {
      const {msg} = error.response.data
      console.log(msg);
      dispatch(isError(msg))
    }
  }

  const registerUser = async ({ name, email, password }) => {
    try {
      const res = await axios.post(API_PROXY + ROOT + REGISTER, {
        nombre: name,
        email,
        password,
        // como para probar
        img: `https://robohash.org/${name}?set=set3`
      })

      console.log('RESPONSE OF REGISTER', res)
      return {}
    } catch (error) {
      console.log(error)
    }
  }

  return { loginUser, registerUser }
}
