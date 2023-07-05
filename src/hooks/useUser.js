import axios from 'axios'
import { DUMMY_JSON, NUCBAZ_API } from '../constants/apiUrls'
import { useDispatch } from 'react-redux'
import { isError, isLogin, loggedUser } from '../redux/user/userSlice'

export const useUser = () => {
  const dispatch = useDispatch()

  const loginUser = async ({ email, password }) => {
    const { ROOT, LOGIN } = NUCBAZ_API
    try {
      dispatch(isLogin())
      const res = await axios.post(ROOT + LOGIN, {
        email,
        password,
      })
      console.log(res);
      dispatch(loggedUser(res.data))
      return (res.data)
    } catch (error) {
      const msg = error.response.data.message
      dispatch(isError(msg))
    }
  }

  const registerUser = async ({ name, email, password }) => {
    const { ROOT, REGISTER } = NUCBAZ_API
    try {
      const res = await axios.post(ROOT + REGISTER, {
        nombre: name,
        email,
        password,
      })

      console.log('RESPONSE OF REGISTER', res)
      return {}
    } catch (error) {
      console.log(error)
    }
  }

  return { loginUser, registerUser }
}
