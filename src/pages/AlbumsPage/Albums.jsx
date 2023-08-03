import React, { useEffect } from 'react'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import { AlbumsSection } from '../../components/Albums/AlbumsSection/AlbumsSection'
import Genres from '../../components/Albums/Categories/Genres'
import { useParams, useNavigate } from 'react-router-dom'
import { useAlbums } from '../../hooks/useAlbums'
import { useSelector } from 'react-redux'
import SearchArtist from '../../components/SearchArtist/SearchArtist'

const AlbumsPage = () => {
  const { searchAlbums, getAlbumsByGenre } = useAlbums()
  const { currentGenre, isFetching } = useSelector(
    ({ albums }) => albums.albums,
  )
  const { search } = useParams()

  useEffect(() => {
    search
      ? searchAlbums({ search })
      : !isFetching && getAlbumsByGenre({ genreId: currentGenre })
  }, [search])

  return (
    <Main>
      <SectionWrapper bg='var(--lightDark)' id='search'>
        <SearchArtist page={'albums'} placeholder='Search for any album' />
      </SectionWrapper>
      <SectionWrapper bg='var(--lightDark)' id='albums'>
        <Genres />
        <AlbumsSection />
      </SectionWrapper>
    </Main>
  )
}

export default AlbumsPage
