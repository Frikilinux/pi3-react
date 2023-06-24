import axios from 'axios'
// import { DUMMY_JSON } from '../constants/apiUrls'
import { useDispatch } from 'react-redux'
import {
  getProducts,
  isError,
  isFetching,
} from '../redux/products/productsSlice'

export const useAlbums = () => {
  const dispatch = useDispatch()

  const fetchAlbums = async () => {
    try {
      dispatch(isFetching())
      const { data } = await axios.get(
        'https://cors.systec.ar:10300/https://api.deezer.com/chart/116/albums',
        {
          mode: 'no-cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          },
        }
      )

      // const data = await fetch('https://api.deezer.com/chart/0/albums', {
      //   mode: 'no-cors',
      // }).then((data) => {
        
        // })
        // const { data } = await res.json()
        
          console.log('FETCH ALBUMS', data)

      dispatch(getProducts(data.data))
    } catch (error) {
      console.log(error)
      // const msg = error.response.data.message
      // dispatch(isError(error))
    }
  }
  // const fetchProductsCategory = async (category) => {
  //   try {
  //     dispatch(isFetching())
  //     const { data } = await axios.get(
  //       `${DUMMY_JSON.ROOT}${DUMMY_JSON.PRODUCTS}${DUMMY_JSON.CATEGORY}/${category} `
  //     )

  //     console.log('AXIOS CATEGORIES PRODUTCS', data.products)

  //     dispatch(getProducts(data.products))
  //   } catch (error) {
  //     const msg = error.response.data.message
  //     dispatch(isError(msg))
  //   }
  // }

  return { fetchAlbums }
}
