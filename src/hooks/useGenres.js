import axios from 'axios'
import { useDispatch } from 'react-redux'
import {
  getCategories,
  isFetching,
} from '../redux/categories/categoriesSlice'
// data harcodeada
import data from './../data/genres.json'

export const useGenres = () => {
  const dispatch = useDispatch()

  const fetchGenres = async () => {
    try {
      dispatch(isFetching())
      // const {data} = await axios.get(
      //   'https://cors.systec.ar:10300/https://api.deezer.com/genre'
      // )

      console.log('AXIOS CATEGORIES', data)

      dispatch(getCategories(data.data))
    } catch (error) {
      // const msg = error.response.data.message
      // dispatch(isError(error))
    }
  }

  return { fetchGenres }
}
