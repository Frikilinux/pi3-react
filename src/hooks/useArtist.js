import { useDispatch } from 'react-redux'
import { DEEZER_API } from '../constants/apiUrls'
import {
  setFetchingArtist,
  setArtist,
  setError,
  setArtistList,
} from '../redux/artist/artistSlice'
import axios from 'axios'

export const useArtist = () => {
  const dispatch = useDispatch()
  const { ROOT, API_PROXY, ARTIST, CHART } = DEEZER_API

  const getArtistChart = async ({ genreId = '0' }) => {
    try {
      dispatch(setFetchingArtist(true))
      const { data } = await axios.get(
        `${API_PROXY + ROOT + CHART + '/' + genreId + '/artists?limit=5'}`,
      )
      console.log('CHARTS', data.data)
      return data.data
    } catch (error) {
      console.log(error)
      // const msg = error.response.data.message
      dispatch(setError(error), setFetchingArtist(true))
    }
  }

  const getArtistById = async (id) => {
    try {
      dispatch(setFetchingArtist(true))
      const { data } = await axios.get(
        `${API_PROXY + ROOT + ARTIST + '/' + id}`,
      )

      dispatch(setArtist(data), setFetchingArtist(false))
    } catch (error) {
      console.log(error)
      // const msg = error.response.data.message
      dispatch(setError(error), setFetchingArtist(true))
    }
  }

  return { getArtistById, getArtistChart }
}
