import axios from 'axios'
import { useState } from 'react'

const useContact = () => {
  const { VITE_API_PROXY, VITE_API_URL } = import.meta.env
  const [sending, setSending] = useState(false)

  const sendContactMsg = async ({ email, name, message }) => {
    try {
      setSending(true)
      await axios.post(VITE_API_URL + '/conctact', {
        name,
        email,
        message,
      })
    } catch (error) {
      console.log(error)
    } finally {
      setSending(false)
    }
  }
  return { sendContactMsg, sending }
}

export { useContact }
