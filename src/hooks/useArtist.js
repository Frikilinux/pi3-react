import { useDispatch } from 'react-redux'
import { DEEZER_API } from '../constants/apiUrls'
import {
  setFetchingArtist,
  setArtist,
  setError,
  // setArtistList,
} from '../redux/artist/artistSlice'
import axios from 'axios'

export const useArtist = () => {
  const dispatch = useDispatch()
  const { ROOT, API_PROXY, ARTIST, CHART } = DEEZER_API
  const { VITE_API_NEW_LOCAL, VITE_API_URL } = import.meta.env

  const getArtistChart = async ({ genreId = '0', limit = '10' }) => {
    try {
      dispatch(setFetchingArtist(true))
      const { data } = await axios.get(
        `${VITE_API_URL}/charts/artists/${genreId}?limit=${limit}`,
      )
      // const { data } = await axios.get(
      //   `${
      //     API_PROXY + ROOT + CHART + '/' + genreId + '/artists?limit=' + limit
      //   }`,
      // )
      return data.data
    } catch (error) {
      dispatch(setError(error), setFetchingArtist(true))
    }
  }

  const getArtistById = async (id) => {
    try {
      dispatch(setFetchingArtist(true))
      const { data } = await axios.get(`${VITE_API_URL}/artists/${id}`)
      // const { data } = await axios.get(
      //   `${API_PROXY + ROOT + ARTIST + '/' + id}`,
      // )

      dispatch(setArtist(data), setFetchingArtist(false))
    } catch (error) {
      dispatch(setError(error), setFetchingArtist(true))
    }
  }

  return { getArtistById, getArtistChart }
}
