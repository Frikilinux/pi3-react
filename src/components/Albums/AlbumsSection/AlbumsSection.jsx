import React from 'react'
import { Section } from '../../UI/SectionWrapper/SectionWrapperStd'
import Albums from '../Albums'
import { useSelector } from 'react-redux'
import Spinner from '../../Spinner/Spinner'
import { AlbumsLoadingContainer } from './AlbumsSectionStd'
import Icons from '../../../constants/icons'

export const AlbumsSection = () => {
  const { isFetching } = useSelector((state) => state.albums)
  const { SpinnerIcon } = Icons

  return (
    <Section>
      <Albums />
      <AlbumsLoadingContainer>
        {isFetching && <Spinner>
          <SpinnerIcon size='100%' />
          </Spinner>}
      </AlbumsLoadingContainer>
    </Section>
  )
}
