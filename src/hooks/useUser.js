import axios from 'axios'
import { DUMMY_JSON } from '../constants/apiUrls'
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

  return { loginUser }
}
