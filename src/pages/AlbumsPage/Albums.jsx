import React, { useEffect } from 'react'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import { AlbumsSection } from '../../components/Albums/AlbumsSection/AlbumsSection'
import { useParams } from 'react-router-dom'
import { useAlbums } from '../../hooks/useAlbums'
import { useSelector } from 'react-redux'
import SearchArtist from '../../components/SearchArtist/SearchArtist'
import { MenuBarContainer } from '../../components/MenuBar/MenuBarStd'
import Genres from '../../components/Categories/Genres'

const AlbumsPage = () => {
  const { searchAlbums, getAlbumsByGenre } = useAlbums()
  const { currentGenre, isFetching } = useSelector(({ albums }) => albums)
  const { search } = useParams()

  useEffect(() => {
    search
      ? searchAlbums({ search })
      : !isFetching && getAlbumsByGenre({ genreId: currentGenre })
  }, [search])

  return (
    <Main>
      <MenuBarContainer>
        <Genres />
      </MenuBarContainer>
      <SectionWrapper bg='var(--lightDark)' id='search'>
        <SearchArtist page={'albums'} placeholder='Search for any album' />
      </SectionWrapper>
      <SectionWrapper bg='var(--lightDark)' id='albums'>
        <AlbumsSection />
      </SectionWrapper>
    </Main>
  )
}

export default AlbumsPage
