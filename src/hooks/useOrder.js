import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {
  fechingOrders,
  getOrderSuccess,
  ordersActionFail,
} from '../redux/orders/ordersSlice'
import { useNavigate } from 'react-router-dom'
import { cleanCart } from '../redux/cart/cartSlice'
import { toast } from 'sonner'
import { logOut } from '../redux/user/userSlice'

const useOrder = () => {
  const { user } = useSelector(({ user }) => user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { VITE_API_URL } = import.meta.env

  const checkError = (message) => {
    if (message === 'TokenExpiredError') {
      toast.error('Session expired. Please login again')
      dispatch(logOut())
      navigate('/login')
      return
    }
    dispatch(ordersActionFail(message))
  }

  const postOrder = async (items) => {
    try {
      dispatch(fechingOrders(true))
      await axios.post(VITE_API_URL + '/orders', items, {
        headers: {
          'x-token': user.token,
        },
      })
      navigate('/summary')
      dispatch(cleanCart())
      toast.success('Order created')
    } catch (error) {
      checkError(error.response.data.code)

    } finally {
      dispatch(fechingOrders(false))
    }
  }

  const getOrders = async () => {
    dispatch(fechingOrders(true))
    try {
      const res = await axios.get(VITE_API_URL + '/orders', {
        headers: {
          'x-token': user.token,
        },
      })
      if (res) {
        dispatch(getOrderSuccess(res.data))
      }
    } catch (error) {
      checkError(error.response.data.code)
    } finally {
      dispatch(fechingOrders(false))
    }
  }

  return { postOrder, getOrders }
}

export default useOrder
