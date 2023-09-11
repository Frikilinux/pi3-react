import React from 'react'
import SectionWrapper from '../../../components/UI/SectionWrapper/SectionWrapper'
import { SearchSectionContainer, SearchSectionTitle } from './SearchSectionStd'
import SearchArtist from '../../../components/SearchArtist/SearchArtist'

const SearchSection = () => {
  return (
    <SectionWrapper id='search' bg='#c56f6f'>
      <SearchSectionContainer>
        <SearchArtist page={'albums'} placeholder='Ie.: Metallica' />
        <SearchSectionTitle>
          <p>Search between thousands of albums</p>
          <span>Your prefered album or artist is here</span>
        </SearchSectionTitle>
      </SearchSectionContainer>
    </SectionWrapper>
  )
}
export default SearchSection
