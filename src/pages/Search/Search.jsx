import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import { AlbumsSection } from '../../components/Albums/AlbumsSection/AlbumsSection'
import { useAlbums } from '../../hooks/useAlbums'

const Search = () => {
  const { search } = useParams()
  const { searchAlbums } = useAlbums()

  useEffect(() => {
    searchAlbums({ search })
  }, [search])

  return (
    <Main>
      <SectionWrapper bg='var(--lightDark)' id='search'>
      </SectionWrapper>
      <SectionWrapper bg='var(--lightDark)' id='search-albums'>
        <h1>Search results for &ldquo; {search} &rdquo;</h1>
        <AlbumsSection />
      </SectionWrapper>
    </Main>
  )
}

export default Search
