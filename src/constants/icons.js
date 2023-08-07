import {
  MdOutlineMail,
  MdOutlinePauseCircle,
  MdOutlinePlayCircle,
  MdOutlineShoppingCart,
  MdPassword,
} from 'react-icons/md'
import {
  AiOutlineArrowLeft,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLogout,
  AiOutlineUser,
  AiTwotoneHeart,
} from 'react-icons/ai'
import { SiMusicbrainz } from 'react-icons/si'
import { LuTrash2 } from 'react-icons/lu'
import { ImSpinner4 } from 'react-icons/im'
import { TbBrandReactNative } from 'react-icons/tb'

const Icons = {
  mail: MdOutlineMail,
  password: MdPassword,
  showPass: AiOutlineEye,
  hidePass: AiOutlineEyeInvisible,
  name: AiOutlineUser,
  play: MdOutlinePlayCircle,
  pause: MdOutlinePauseCircle,
  Logout: AiOutlineLogout,
  CartIcon: MdOutlineShoppingCart,
  LogoImg: SiMusicbrainz,
  Trash: LuTrash2,
  SpinnerIcon: ImSpinner4,
  ReactIcon: TbBrandReactNative,
  BackArrow: AiOutlineArrowLeft,
  Heart: AiTwotoneHeart,
  UserIcon: AiOutlineUser,
}

export default Icons
