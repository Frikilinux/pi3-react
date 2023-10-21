import axios from 'axios'
import { useState } from 'react'
import { toast } from 'sonner'

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
      toast.success('Message sended successfully')
      return res.statusText
    } catch (error) {
      toast.success('Cant send the message. Try again later')
    } finally {
      setSending(false)
    }
  }
  return { sendContactMsg, sending }
}

export { useContact }
