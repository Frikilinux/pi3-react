import { useDispatch } from 'react-redux'
import { DEEZER_API } from '../constants/apiUrls'
import {
  fetchingArtist,
  setArtist,
  setError,
} from '../redux/artist/artistSlice'
import axios from 'axios'

export const useArtist = () => {
  const dispatch = useDispatch()
  const { ROOT, API_PROXY, ARTIST } = DEEZER_API

  const getArtistById = async (id) => {
    try {
      dispatch(fetchingArtist())
      const { data } = await axios.get(
        `${API_PROXY + ROOT + ARTIST + '/' + id}`
      )

      console.log('ARTIST', data)

      dispatch(setArtist(data))
    } catch (error) {
      console.log(error)
      // const msg = error.response.data.message
      dispatch(setError(error))
    }
  }

  return { getArtistById }
}
