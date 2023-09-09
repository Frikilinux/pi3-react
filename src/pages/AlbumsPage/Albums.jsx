import React, { useEffect } from 'react'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import { AlbumsSection } from '../../components/Albums/AlbumsSection/AlbumsSection'
import { useParams } from 'react-router-dom'
import { useAlbums } from '../../hooks/useAlbums'
import { useSelector } from 'react-redux'
import SearchArtist from '../../components/SearchArtist/SearchArtist'
import {
  AlbumsSearchContainer,
  AlbumsSearchTitle,
  AlbumsTitleType,
} from './AlbumsStd'

const AlbumsPage = () => {
  const { searchAlbums, getAlbumsByGenre } = useAlbums()
  const { currentGenre, isFetching } = useSelector(({ albums }) => albums)
  const { search } = useParams()

  useEffect(() => {
    search
      ? searchAlbums({ search })
      : !isFetching &&
        getAlbumsByGenre({ genreId: currentGenre.genreId, genreName: 'All' })
  }, [search])

  return (
    <Main>
      <SectionWrapper bg='#0f4481' id='albums-search'>
        <AlbumsSearchContainer>
          <AlbumsSearchTitle>Search your preferred album</AlbumsSearchTitle>
          <SearchArtist page={'albums'} placeholder='Ie.: Eye in the sky' />
        </AlbumsSearchContainer>
      </SectionWrapper>
      <SectionWrapper bg='var(--lightDark)' id='albums'>
        <AlbumsTitleType>
          {search ? (
            <>
              Results for <span>{search}</span>
            </>
          ) : (
            <>
              <span>{currentGenre.genreName ?? ''}</span> Albums
            </>
          )}
        </AlbumsTitleType>
        <AlbumsSection />
      </SectionWrapper>
    </Main>
  )
}

export default AlbumsPage
