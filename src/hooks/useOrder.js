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

const useOrder = () => {
  const { user } = useSelector(({ user }) => user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { ROOT, ORDERS, API_PROXY } = NUCBAZ_API

  const postOrder = async (items) => {
    try {
      dispatch(fechingOrders(true))
      const res = await axios.post(API_PROXY + ROOT + ORDERS, items, {
        headers: {
          'x-token': user.token,
        },
      })

      if (res.statusText === 'Created') {
        navigate('/summary')
        dispatch(fechingOrders(false))
        dispatch(cleanCart())
      }
    } catch (error) {
      dispatch(ordersActionFail(error.response.data.msg), fechingOrders(false))
    }
  }

  const getOrders = async () => {
    dispatch(fechingOrders(true))
    try {
      const res = await axios.get(API_PROXY + ROOT + ORDERS, {
        headers: {
          'x-token': user.token,
        },
      })
      if (res) {
        dispatch(getOrderSuccess(res.data.data))
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
