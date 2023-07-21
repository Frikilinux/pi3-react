import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import { AlbumsSection } from '../../components/Albums/AlbumsSection/AlbumsSection'
import { useAlbums } from '../../hooks/useAlbums'
import SearchArtist from '../../components/SearchArtist/SearchArtist'
import { SearchTitle } from './SearchStd'

const Search = () => {
  const { search } = useParams()
  const { searchAlbums } = useAlbums()

  useEffect(() => {
    searchAlbums({ search })
  }, [search])

  return (
    <Main>
      <SectionWrapper bg='var(--lightDark)' id='search'>
        <SearchArtist />
      </SectionWrapper>
      <SectionWrapper bg='var(--lightDark)' id='search-albums'>
        <SearchTitle>Search results for &ldquo; {search} &rdquo;</SearchTitle>
        <AlbumsSection />
      </SectionWrapper>
    </Main>
  )
}

export default Search
