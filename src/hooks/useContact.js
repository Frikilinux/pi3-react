import axios from 'axios'
import { useState } from 'react'

const useContact = () => {
  const { VITE_API_PROXY, VITE_API_URL } = import.meta.env
  const [sending, setSending] = useState(false)

  const sendContactMsg = async ({ email, name, message }) => {
    try {
      setSending(true)
      const res = await axios.post(VITE_API_URL + '/contact', {
        name,
        email,
        message,
      })
      return res.status
    } catch (error) {
      console.log(error)
    } finally {
      setSending(false)
    }
  }
  return { sendContactMsg, sending }
}

export { useContact }
