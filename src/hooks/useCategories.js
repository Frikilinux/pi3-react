import axios from 'axios'
import { DUMMY_JSON } from '../constants/apiUrls'
import { useDispatch } from 'react-redux'
import {
  getCategories,
  isError,
  isFetching,
} from '../redux/categories/categoriesSlice'

export const useCategories = () => {
  const dispatch = useDispatch()

  const fetchCategories = async () => {
    try {
      dispatch(isFetching())
      const {data} = await axios.get(
        `${DUMMY_JSON.ROOT}${DUMMY_JSON.PRODUCTS}${DUMMY_JSON.CATEGORIES}`
      )

      dispatch(getCategories(data))
    } catch (error) {
      // const msg = error.response.data.message
      dispatch(isError(error))
    }
  }

  return { fetchCategories }
}
