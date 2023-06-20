import axios from 'axios'
import { DUMMY_JSON } from '../constants/apiUrls'
import { useDispatch } from 'react-redux'
import {
  getProducts,
  isError,
  isFetching,
} from '../redux/products/productsSlice'

export const useProducts = () => {
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    try {
      dispatch(isFetching())
      const { data } = await axios.get(
        `${DUMMY_JSON.ROOT}${DUMMY_JSON.PRODUCTS}`
      )

      console.log('AXIOS PRODUTCS', data.products)

      dispatch(getProducts(data.products))
    } catch (error) {
      const msg = error.response.data.message
      dispatch(isError(msg))
    }
  }

  return { fetchProducts }
}
