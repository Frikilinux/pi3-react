import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'
import { setUserError } from '../redux/user/userSlice'

export const useVerify = () => {
  const { VITE_API_URL } = import.meta.env
  // const [verifyError, setVerifyError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [fetching, setFetching] = useState(false)
  const dispatch = useDispatch()

  const emailVerify = async (token) => {
    try {
      setSuccess(null)
      setFetching(true)
      const { data } = await axios.patch(VITE_API_URL + '/users/verify', null, {
        headers: {
          'x-token': token,
        },
      })

      setSuccess(data)
    } catch (error) {
      dispatch(setUserError(error.response.data))
    } finally {
      setFetching(false)
    }
  }

  const genVerifyToken = async (email) => {
    try {
      setSuccess(null)
      setFetching(true)
      const { data } = await axios.post(VITE_API_URL + '/users/verify/new', {
        email,
      })
      toast.success('Email sended, please check your email')
      // setSuccess(data)
      return data
    } catch (error) {
      dispatch(setUserError(error.response.data))
    } finally {
      setFetching(false)
    }
  }

  return { emailVerify, genVerifyToken, success, fetching }
}
