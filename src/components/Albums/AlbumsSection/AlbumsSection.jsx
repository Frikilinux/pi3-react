import React from 'react'
import Albums from '../Albums'
import { useSelector } from 'react-redux'
import Spinner from '../../Spinner/Spinner'
import {
  AlbumsLoadingContainer,
  AlbumsSectionContainer,
} from './AlbumsSectionStd'
import { IconWhirl } from '@tabler/icons-react'

export const AlbumsSection = () => {
  const { isFetching } = useSelector((state) => state.albums)

  return (
    <AlbumsSectionContainer>
      <Albums />
      <AlbumsLoadingContainer>
        {isFetching && (
          <Spinner>
            <IconWhirl size='5em' />
          </Spinner>
        )}
      </AlbumsLoadingContainer>
    </AlbumsSectionContainer>
  )
}
