import axios from 'axios'
import { useState } from 'react'
import { toast } from 'sonner'

export const useVerify = () => {
  const { VITE_API_PROXY, VITE_API_URL } = import.meta.env
  const [verifyError, setVerifyError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [fetching, setFetching] = useState(false)

  const emailVerify = async (token) => {
    try {
      setVerifyError(null)
      setSuccess(null)
      setFetching(true)
      const { data } = await axios.patch(VITE_API_URL + '/users/verify', null, {
        headers: {
          'x-token': token,
        },
      })

      setSuccess(data)
    } catch (error) {
      console.log(error)
      setVerifyError(error.response.data)
    } finally {
      setFetching(false)
    }
  }

  const genVerifyToken = async (email) => {
    try {
      setVerifyError(null)
      setSuccess(null)
      const { data } = await axios.post(VITE_API_URL + '/users/verify/new', {
        email,
      })
      setSuccess(data)
      toast.success('Email sended, please check your email')
    } catch (error) {
      console.log(error)
      setVerifyError(error.response.data)
    } finally {
      setFetching(false)
    }
  }

  return { emailVerify, genVerifyToken, verifyError, success, fetching }
}
