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
import { AlbumsTitleType } from './AlbumsStd'
import { useMediaPredicate } from 'react-media-hook'

const AlbumsPage = () => {
  const { searchAlbums, getAlbumsByGenre } = useAlbums()
  const { currentGenre, isFetching } = useSelector(({ albums }) => albums)
  const { search } = useParams()

  useEffect(() => {
    search
      ? searchAlbums({ search })
      : !isFetching && getAlbumsByGenre({ genreId: currentGenre.genreId, genreName: 'All' })
  }, [search])

  return (
    <Main>
      <SectionWrapper bg='var(--lightDark)' id='search' padding={'50px 0 0 0'}>
        <SearchArtist page={'albums'} placeholder='Search for any album' />
      </SectionWrapper>
      <SectionWrapper bg='var(--lightDark)' id='albums'>
        <AlbumsTitleType>
          {search
            ? `Results for '${search}'`
            : `Albums of ${currentGenre.genreName ?? ''}  ${
                currentGenre.genreId?.toString() === '0' ? 'genres' : 'genre'
              }`}
        </AlbumsTitleType>
        <AlbumsSection />
      </SectionWrapper>
    </Main>
  )
}

export default AlbumsPage
