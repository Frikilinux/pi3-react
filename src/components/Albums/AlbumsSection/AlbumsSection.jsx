import React from 'react'
import { Section } from '../../UI/SectionWrapper/SectionWrapperStd'
import Albums from '../Albums'
import { NextButton } from '../CardProduct/AlbumCardStd'
import { useAlbums } from '../../../hooks/useAlbums'
import { useSelector } from 'react-redux'

export const AlbumsSection = () => {
  const { next, isFetching } = useSelector((state) => state.albums)
  const { getAlbumsByGenre } = useAlbums()
  return (
    <Section>
      <Albums />
      {next && (
        <NextButton
          onClick={() => {
            getAlbumsByGenre({ next })
          }}
        >
          {isFetching ? 'Cargando...' : 'NEXT'}
        </NextButton>
      )}
    </Section>
  )
}
