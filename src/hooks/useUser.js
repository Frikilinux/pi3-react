import axios from 'axios'
import { DUMMY_JSON, NUCBAZ_API } from '../constants/apiUrls'
import { useDispatch } from 'react-redux'
import { isError, isLogin, loggedUser } from '../redux/user/userSlice'

export const useUser = () => {
  const dispatch = useDispatch()

  const loginUser = async ({ email, password }) => {
    try {
      dispatch(isLogin())
      const res = await axios.post(`${DUMMY_JSON.ROOT}${DUMMY_JSON.LOGIN}`, {
        username: email,
        password,
      })

      dispatch(loggedUser(res.data))
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
