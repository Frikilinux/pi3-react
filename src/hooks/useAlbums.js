import axios from 'axios'
// import { DUMMY_JSON } from '../constants/apiUrls'
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
  const { ROOT, ALBUM, API_PROXY } = DEEZER_API

  const fetchAlbumById = async (id) => {
    try {
      dispatch(fetchingPreview())
      const { data } = await axios.get(`${API_PROXY + ROOT + ALBUM + '/' + id}`)

      console.log('DATA IN LBUM BY ID', data)

      dispatch(setAlbumPreview({ ...data, price: createPrice(data.id) }))
    } catch (error) {
      console.log(error)
    }
  }

  const getArtistAlbums = ({ artistId, next }) => {
    fetchAlbums({
      url: `${API_PROXY + ROOT + '/artist/' + artistId + '/albums?limit=20'}`,
      next,
    })
  }

  const getAlbumsByGenre = ({ genreId = '0', next }) => {
    fetchAlbums({
      url: `${
        API_PROXY + ROOT + '/editorial/' + genreId + '/releases?limit=20'
      }`,
      next, genreId
    })
  }

  const fetchAlbums = async ({ url, next, genreId }) => {
    const endpointUrl = next ? `${API_PROXY + next}` : url
    try {
      dispatch(isFetching())
      const { data } = await axios.get(endpointUrl)

      console.log('FETCH ALBUMS', data)

      const payload = {
        total: data.total,
        albums: data.data.map((album) => {
          return { ...album, price: createPrice(album.id) }
        }),
        next: data.next,
        currentGenre: genreId,
      }

      next ? dispatch(nextAlbumsPage(payload)) : dispatch(setAlbums(payload))
    } catch (error) {
      console.log(error)
      // const msg = error.response.data.message
      dispatch(isError(error))
    }
  }

  const fetchAlbumsGenre = async ({ genreId }) => {
    try {
      dispatch(isFetching())
      const { data } = await axios.get(
        `${API_PROXY + ROOT + '/editorial/' + genreId + '/releases?index=0'}`
      )

      // console.log('AXIOS CATEGORIES PRODUTCS', data.products)

      dispatch(setAlbums(data))
    } catch (error) {
      const msg = error.response.data.message
      dispatch(isError(msg))
    }
  }

  return { fetchAlbumsGenre, fetchAlbumById, getAlbumsByGenre, getArtistAlbums }
}
