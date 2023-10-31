import axios from 'axios'
import { useDispatch } from 'react-redux'
import {
  isError,
  isFetching,
  nextAlbumsPage,
  setAlbums,
} from '../redux/albums/albumsSlice'
import { DEEZER_API } from '../constants/apiUrls'
import createPrice from '../utils/createPrice'
import {
  fetchingPreview,
  setAlbumPreview,
} from '../redux/previewPlayer/previewPlayerSlice'

export const useAlbums = () => {
  const dispatch = useDispatch()
  // const { ROOT, ALBUM, API_PROXY, CHART } = DEEZER_API
  const { VITE_API_URL } = import.meta.env

  const fetchAlbumById = async (id) => {
    try {
      dispatch(fetchingPreview())
      // const { data } = await axios.get(`${API_PROXY + ROOT + ALBUM + '/' + id}`)
      const { data } = await axios.get(`${VITE_API_URL}/albums/${id}`)

      dispatch(setAlbumPreview({ ...data, price: createPrice(data.id) }))
    } catch (error) {
      dispatch(isError(error))
    }
  }

  const searchAlbums = ({ search }) => {
    // fetchAlbums({
    //   url: `${API_PROXY + ROOT + '/search/album?q=' + search + '&limit=20'}`,
    // })
    fetchAlbums({
      url: `${VITE_API_URL}/search/albums?q=${search}`,
    })
  }

  const getArtistAlbums = ({ artistId, next }) => {
    fetchAlbums({
      url: `${VITE_API_URL}/artists/albums/${artistId}?limit=20`,
      next,
    })
    // fetchAlbums({
    //   url: `${API_PROXY + ROOT + '/artist/' + artistId + '/albums?limit=20'}`,
    //   next,
    // })
  }

  const getAlbumsByGenre = ({ genreId = 0, next, genreName }) => {
    fetchAlbums({
      url: `${VITE_API_URL}/albums/?genreId=${genreId}&limit=20`,
      // url: `${API_PROXY}${ROOT}/editorial/${genreId}/releases?limit=20`,
      next,
      genreId,
      genreName,
    })
  }

  const fetchAlbums = async ({ url, next, genreId, genreName }) => {
    // const endpointUrl = next ? `${API_PROXY + next}` : url
    const endpointUrl = next ?? url
    try {
      dispatch(isFetching())
      const { data } = await axios.get(endpointUrl)

      console.log(data)

      const payload = {
        total: data.total,
        albums: data.data.map((album) => {
          return { ...album, price: createPrice(album.id) }
        }),
        next: data.next,
        currentGenre: { genreId, genreName },
      }

      next ? dispatch(nextAlbumsPage(payload)) : dispatch(setAlbums(payload))
    } catch (error) {
      // const msg = error.response.data.message
      dispatch(isError(error))
    }
  }

  const getAlbumsChart = async ({ genreId = 0, limit = 10}) => {
    try {
      // const { data } = await axios.get(
      //   `${API_PROXY + ROOT + CHART + '/' + genreId + '/albums'}`,
      // )
      const { data } = await axios.get(
        `${VITE_API_URL}/charts/albums/${genreId}/?limit=${limit}`,
      )
      const chart = data.data.map((album) => {
        return { ...album, price: createPrice(album.id) }
      })
      return chart
    } catch (error) {
      // const msg = error.response.data.message
      // dispatch(isError(error))
    }
  }

  return {
    // fetchAlbumsGenre,
    fetchAlbumById,
    getAlbumsByGenre,
    getArtistAlbums,
    searchAlbums,
    fetchAlbums,
    getAlbumsChart,
  }
}
