import axios from 'axios'
// import { NUCBAZ_API } from '../constants/apiUrls'
import { useDispatch } from 'react-redux'
import {
  loggedUser,
  setFechingUser,
  setUserError,
} from '../redux/user/userSlice'
import { toast } from 'sonner'

export const useUser = () => {
  const dispatch = useDispatch()
  const { VITE_API_PROXY, VITE_API_URL } = import.meta.env
  // const { ROOT, LOGIN, API_PROXY, REGISTER } = NUCBAZ_API

  const loginUser = async ({ email, password }) => {
    try {
      dispatch(setFechingUser(true))
      const { data } = await axios.post(VITE_API_URL + '/users/login', {
        email: email.toLowerCase(),
        password,
      })
      dispatch(loggedUser(data))
      toast.success('User logged')
      return data
    } catch (error) {
      dispatch(setUserError(error.response.data))
    } finally {
      dispatch(setFechingUser(false))
    }
  }

  const registerUser = async ({ name, email, password }) => {
    try {
      dispatch(setFechingUser(true))
      const res = await axios.post(VITE_API_URL + '/users/register', {
        name,
        email,
        password,
      })
      toast.success('User registered, please check your email to verify', {
        autoclose: 4000,
      })
      return res
    } catch (error) {
      const { message } = error
      dispatch(setUserError(message))
    } finally {
      dispatch(setFechingUser(false))
    }
  }

  return { loginUser, registerUser }
}
