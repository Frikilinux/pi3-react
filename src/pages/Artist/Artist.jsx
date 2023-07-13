import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import { useSelector } from 'react-redux'
import { useArtist } from '../../hooks/useArtist'
import { AlbumsSection } from '../../components/Albums/AlbumsSection/AlbumsSection'
import { useAlbums } from '../../hooks/useAlbums'

const Artist = () => {
  const { artist, isError } = useSelector(({ artist }) => artist)
  const { artistId } = useParams()
  const { getArtistById } = useArtist()
  const { getArtistAlbums} = useAlbums()

  useEffect(() => {
    getArtistById(artistId)
    getArtistAlbums({artistId})
  }, [artistId])

  return (
    <Main>
      <SectionWrapper bg='var(--lightDark)' id='Artits'>
        {console.log('ARTIST PAGE', artist)}
        <div>Artist ID {artistId}</div>

      </SectionWrapper>
      <AlbumsSection />
    </Main>
  )
}

export default Artist
