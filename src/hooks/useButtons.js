import { useDispatch, useSelector } from 'react-redux'
import { addToCart, hideCart } from '../redux/cart/cartSlice'
import { useNavigate } from 'react-router-dom'
import {
  hideAlbumPreview,
  setImagePreview,
} from '../redux/previewPlayer/previewPlayerSlice'
import { setIsModalHidden, setUserError } from '../redux/user/userSlice'
import { setIsHiddenMenu } from '../redux/categories/categoriesSlice'
import { toast } from 'sonner'

const useButtons = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector(({ user }) => user)

  const handleAddToCart = (props) => {
    if (!user) {
      // toast.warning('Plese login to start buying', { autoClose: 4000 })
      toast.error('Plese login to start buying')
    } else {
      dispatch(addToCart(props))
      toast.success('Album added')
      // toast.success(`Album added`, { autoClose: 1000 })
    }
  }

  const handleArtistPage = (id) => {
    navigate(`/artist/${id}`)
    dispatch(hideAlbumPreview(true))
  }

  const hideAllModals = () => {
    dispatch(hideAlbumPreview(true))
    dispatch(hideCart(true))
    dispatch(setUserError(false))
    dispatch(setImagePreview(false))
    dispatch(setIsHiddenMenu(true))
    dispatch(setIsModalHidden(true))
  }

  return { handleAddToCart, handleArtistPage, hideAllModals }
}

export default useButtons
