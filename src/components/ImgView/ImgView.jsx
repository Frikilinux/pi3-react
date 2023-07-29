import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonPrimary from '../UI/Button/ButtonPrimary'
import Icons from '../../constants/icons'
import { PreviewContainer } from './ImgViewStd'
import { setImagePreview } from '../../redux/previewPlayer/previewPlayerSlice'

const ImgView = () => {
  const dispatch = useDispatch()
  const { imagePreview } = useSelector(({ previewPlayer }) => previewPlayer)
  const { BackArrow } = Icons

  return (
    <PreviewContainer
      imgsrc={imagePreview}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      key='image-preview'
    >
      <ButtonPrimary onClick={() => dispatch(setImagePreview(false))}>
        <BackArrow />
      </ButtonPrimary>
    </PreviewContainer>
  )
}

export default ImgView
