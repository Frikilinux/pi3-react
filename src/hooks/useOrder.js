import axios from 'axios'
import { NUCBAZ_API } from '../constants/apiUrls'
import { useDispatch, useSelector } from 'react-redux'
import { fechingOrders, getOrderSuccess } from '../redux/orders/ordersSlice'

const useOrder = () => {
  const { user } = useSelector(({ user }) => user)
  const dispatch = useDispatch()
  const { ROOT, ORDERS, API_PROXY } = NUCBAZ_API

  const postOrder = async (items) => {
    console.log(items)
    try {
      dispatch(fechingOrders())
      const res = await axios.post(API_PROXY + ROOT + ORDERS, items, {
        headers: {
          'x-token': user.token,
        },
      })

      if (res.statusText === 'Created') console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const getOrders = async () => {
    dispatch(fechingOrders())

    try {
      const res = await axios.get(API_PROXY + ROOT + ORDERS, {
        headers: {
          'x-token': user.token,
        },
      })
      console.log(res)
      if (res) {
        dispatch(getOrderSuccess(res.data.data))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return { postOrder, getOrders }
}

export default useOrder
