import React from 'react'
import Albums from '../Albums'
import { useSelector } from 'react-redux'
import Spinner from '../../Spinner/Spinner'
import { AlbumsLoadingContainer, AlbumsSectionContainer } from './AlbumsSectionStd'
import Icons from '../../../constants/icons'

export const AlbumsSection = () => {
  const { isFetching } = useSelector((state) => state.albums)
  const { SpinnerIcon } = Icons

  return (
    <AlbumsSectionContainer>
      <Albums />
      <AlbumsLoadingContainer>
        {isFetching && <Spinner>
          <SpinnerIcon size='100%' />
          </Spinner>}
      </AlbumsLoadingContainer>
    </AlbumsSectionContainer>
  )
}
