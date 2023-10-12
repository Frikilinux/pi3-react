import axios from 'axios'
import { useState } from 'react'

const useContact = () => {
  const [sending, setSending] = useState(false)

  const sendContactMsg = async ({ email, name, message }) => {
    try {
      // const res = await axios.post(VITE_API_URL + '/conctact', {
      setSending(true)
      await axios.post('http://localhost:9001/contact', {
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
