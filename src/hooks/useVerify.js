import axios from 'axios'
import { useState } from 'react'
import { toast } from 'sonner'

export const useVerify = () => {
  const { VITE_API_PROXY, VITE_API_URL } = import.meta.env
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [fetching, setFetching] = useState(false)

  const emailVerify = async (token) => {

    try {
      setFetching(true)
      const { data } = await axios.patch(VITE_API_URL + '/user/verify/' + token)

      setSuccess(data)
    } catch (error) {
      setError(error.response.data)
    } finally {
      setFetching(false)
    }
  }

  const genVerifyToken = async (email) => {
    try {
      setError(null)
      const {data} = await axios.post(VITE_API_URL + '/user/verify/new', {
        email,
      })
      setSuccess(data)
      toast.success('Email sended, please check your email')
    } catch (error) {
      setError(error.response.data)
    } finally {
      setFetching(false)
    }
  }

  return { emailVerify, genVerifyToken, error, success, fetching }
}
