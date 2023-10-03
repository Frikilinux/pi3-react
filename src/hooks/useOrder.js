import axios from 'axios'
import { NUCBAZ_API } from '../constants/apiUrls'
import { useDispatch, useSelector } from 'react-redux'
import {
  fechingOrders,
  getOrderSuccess,
  ordersActionFail,
} from '../redux/orders/ordersSlice'
import { useNavigate } from 'react-router-dom'
import { cleanCart } from '../redux/cart/cartSlice'
import { toast } from 'sonner'

const useOrder = () => {
  const { user } = useSelector(({ user }) => user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { ROOT, ORDERS, API_PROXY } = NUCBAZ_API
  const { VITE_API_PROXY, VITE_API_URL } = import.meta.env

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
      dispatch(
        ordersActionFail(error.response.data.message),
        fechingOrders(false),
      )
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
      console.log(res)
      if (res) {
        dispatch(getOrderSuccess(res.data))
        dispatch(fechingOrders(false))
      }
    } catch (error) {
      dispatch(
        ordersActionFail(error.response.data.msg),
        dispatch(fechingOrders(false)),
      )
    }
  }

  return { postOrder, getOrders }
}

export default useOrder
