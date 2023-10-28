import axios from 'axios'
import { useState } from 'react'
import { toast } from 'sonner'

const useContact = () => {
  const { VITE_API_URL } = import.meta.env
  const [sending, setSending] = useState(false)

  const sendContactMsg = async ({ email, name, message }) => {
    try {
      setSending(true)
      await axios.post(VITE_API_URL + '/contact', {
        name,
        email: email.toLowerCase().trim(),
        message,
      })
      toast.success('Message sended successfully')
      return 'OK'
    } catch (error) {
      toast.error('Cant send the message. Try again later')
    } finally {
      setSending(false)
    }
  }
  return { sendContactMsg, sending }
}

export { useContact }
