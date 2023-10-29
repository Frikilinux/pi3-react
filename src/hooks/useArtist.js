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

  const getArtistChart = async ({ genreId = '0', limit='5' }) => {
    try {
      dispatch(setFetchingArtist(true))
      const { data } = await axios.get(
        `${API_PROXY + ROOT + CHART + '/' + genreId + '/artists?limit=' + limit}`,
      )
      return data.data
    } catch (error) {
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
      dispatch(setError(error), setFetchingArtist(true))
    }
  }

  return { getArtistById, getArtistChart }
}
