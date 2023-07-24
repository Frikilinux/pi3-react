import { useDispatch, useSelector } from 'react-redux'
import { addToCart, hideCart } from '../redux/cart/cartSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { hidePreview } from '../redux/previewPlayer/previewPlayerSlice'
import { resetError } from '../redux/orders/ordersSlice'
import { setUserError } from '../redux/user/userSlice'

const useButtons = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector(({ user }) => user)

  const handleAddToCart = (props) => {
    if (!user) {
      toast.warning('Plese login to start buying', { autoClose: 4000 })
    } else {
      dispatch(addToCart(props))
      toast.success(`Album added`, { autoClose: 1000 })
    }
  }

  const handleArtistPage = (id) => {
    navigate(`/artist/${id}`)
    dispatch(hidePreview(true))
  }

  const hideAllModals = () => {
    dispatch(hidePreview(true))
    dispatch(hideCart(true))
    dispatch(setUserError(false))
  }

  return { handleAddToCart, handleArtistPage, hideAllModals }
}

export default useButtons
