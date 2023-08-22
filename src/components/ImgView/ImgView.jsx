import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonPrimary from '../UI/Button/ButtonPrimary'
import { PreviewContainer } from './ImgViewStd'
import { setImagePreview } from '../../redux/previewPlayer/previewPlayerSlice'
import { IconArrowLeft } from '@tabler/icons-react'

const ImgView = () => {
  const dispatch = useDispatch()
  const { imagePreview } = useSelector(({ previewPlayer }) => previewPlayer)

  return (
    <PreviewContainer
      $imgsrc={imagePreview}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      key='image-preview'
    >
      <ButtonPrimary onClick={() => dispatch(setImagePreview(false))}>
        <IconArrowLeft />
      </ButtonPrimary>
    </PreviewContainer>
  )
}

export default ImgView
