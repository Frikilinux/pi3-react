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

      console.log('FETCH ALBUMS', data)
      // Fetch de los albums con más datos
      const albumsIds = await data.data.map((album) => album.id)

      const albumsData = await Promise.all(
        albumsIds.map(async (id) => {
          const { data } = await axios.get(
            `${
              DEEZER_API.API_PROXY +
              DEEZER_API.ROOT +
              DEEZER_API.ALBUM +
              '/' +
              id
            }`
          )
          return data
        })
      )

      console.log('ALBUMS AXIOS', albumsData)

      dispatch(getProducts(albumsData))
    } catch (error) {
      console.log(error)
      // const msg = error.response.data.message
      dispatch(isError(error))
    }
  }

  const fetchAlbumsGenre = async ({ genreId, index = 0 }) => {
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
