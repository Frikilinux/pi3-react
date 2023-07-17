import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../redux/cart/cartSlice"
import { toast } from "react-toastify"

const useButtons = () => {

  const dispatch = useDispatch()
  const { user } = useSelector(({ user }) => user)

  const handleAddToCart = (props) => {
    if (!user) {
      toast.warning('Plese login to start buying', { autoClose: 4000 })
    } else {
      dispatch(addToCart(props))
      toast.success(`Album added`)
    }
  }

  return { handleAddToCart }
}

export default useButtons