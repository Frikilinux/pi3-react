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
      const res = await axios.get(`${DUMMY_JSON.ROOTll}${DUMMY_JSON.PRODUCTS}`)

      console.log('RESPONSE DE AXIOS PRODUTCS', res.data.products);

      dispatch(getProducts(res.data.products))
    } catch (error) {
      const msg = error.response.data.message
      dispatch(isError(msg))
    }
  }

  return { fetchProducts }
}
