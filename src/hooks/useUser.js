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
  const { VITE_API_URL } = import.meta.env

  const loginUser = async ({ email, password }) => {
    try {
      dispatch(setFechingUser(true))
      const { data } = await axios.post(VITE_API_URL + '/users/login', {
        email: email.toLowerCase(),
        password,
      })
      dispatch(loggedUser(data))
      toast.success(`You are logged in, nice to see you ${data.user.name?.split(' ')[0]}`)
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
      if (error.response.data.errors) {
        const err = error.response.data.errors
          .map((err) => {
            return err.msg
          })
          .join(', ')
        dispatch(setUserError(err))
        return
      }
      dispatch(setUserError(error.message))
    } finally {
      dispatch(setFechingUser(false))
    }
  }

  return { loginUser, registerUser }
}
