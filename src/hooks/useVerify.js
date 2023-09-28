import axios from 'axios'
import { useState } from 'react'

export const useVerify = () => {
  const [error, setError] = useState()
  const emailVerify = async (token) => {
    console.log(token, 'TOKEN DE AXIOS')
    console.log(import.meta.env.API_URL)
    try {
      const data = await axios.patch(
        import.meta.env.VITE_API_URL + '/user/verify/' + token,
      )

      console.log(data, 'DATA DE LA API')
    } catch (error) {
      setError(error.response.data)
      console.log(error.response.data)
    }
  }

  return { emailVerify, error }
}
