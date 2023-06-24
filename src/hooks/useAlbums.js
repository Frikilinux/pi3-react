import axios from 'axios'
// import { DUMMY_JSON } from '../constants/apiUrls'
import { useDispatch } from 'react-redux'
import {
  getProducts,
  isError,
  isFetching,
} from '../redux/products/productsSlice'
import { DEEZER_API } from '../constants/apiUrls'

export const useAlbums = () => {
  const dispatch = useDispatch()

  const fetchAlbums = async (index = 0) => {
    try {
      dispatch(isFetching())
      const { data } = await axios.get(
        `${
          DEEZER_API.API_PROXY +
          DEEZER_API.ROOT +
          '/editorial/0/releases?index=' +
          index
        }`
      )

      // const data = await fetch('https://api.deezer.com/chart/0/albums', {
      //   mode: 'no-cors',
      // }).then((data) => {

      // })
      // const { data } = await res.json()

      console.log('FETCH ALBUMS', data)

      dispatch(getProducts(data))
    } catch (error) {
      console.log(error)
      const msg = error.response.data.message
      dispatch(isError(msg))
    }
  }
  const fetchAlbumsGenre = async ({genreId, index = 0}) => {
    try {
      dispatch(isFetching())
      const { data } = await axios.get(
        `${
          DEEZER_API.API_PROXY +
          DEEZER_API.ROOT +
          '/editorial/' +
          genreId +
          '/releases?index=' +
          index
        }`
      )

      console.log('AXIOS CATEGORIES PRODUTCS', data.products)

      dispatch(getProducts(data))
    } catch (error) {
      const msg = error.response.data.message
      dispatch(isError(msg))
    }
  }

  return { fetchAlbums, fetchAlbumsGenre }
}
