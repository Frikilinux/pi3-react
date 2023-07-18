import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/cart/cartSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { hidePreview } from '../redux/previewPlayer/previewPlayerSlice'

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

  return { handleAddToCart, handleArtistPage }
}

export default useButtons
