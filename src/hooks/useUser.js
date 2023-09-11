import axios from 'axios'
import { NUCBAZ_API } from '../constants/apiUrls'
import { useDispatch } from 'react-redux'
import {
  loggedUser,
  setUserError,
  setUserFetching,
} from '../redux/user/userSlice'
import { toast } from 'sonner'

export const useUser = () => {
  const dispatch = useDispatch()
  const { ROOT, LOGIN, API_PROXY, REGISTER } = NUCBAZ_API

  const loginUser = async ({ email, password }) => {
    try {
      dispatch(setUserFetching(true))
      const res = await axios.post(API_PROXY + ROOT + LOGIN, {
        email: email.toLowerCase(),
        password,
      })
      dispatch(loggedUser(res.data))
      toast.success('User logged')
      return res.data
    } catch (error) {
      const { msg } = error.response.data
      dispatch(setUserError(msg))
    } finally {
      dispatch(setUserFetching(false))
    }
  }

  const registerUser = async ({ name, email, password }) => {
    try {
      dispatch(setUserFetching(true))
      const res = await axios.post(API_PROXY + ROOT + REGISTER, {
        nombre: name,
        email,
        password,
      })
      toast.success('User registered')
      return res
    } catch (error) {
      const { msg } = error.response.data
      dispatch(setUserError(msg))
    } finally {
      dispatch(setUserFetching(false))
    }
  }

  return { loginUser, registerUser }
}
