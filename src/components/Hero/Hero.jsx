import React, { useState } from 'react'
import {
  HeroLeft,
  HeroSearchContainer,
  HeroSectionContainer,
  HeroTextContainer,
  SearchInput,
} from './HeroStd'
import SectionWrapper from '../UI/SectionWrapper/SectionWrapper'
import { useNavigate } from 'react-router-dom'
import ButtonPrimary from '../UI/Button/ButtonPrimary'

const Hero = () => {
  const [search, setsearch] = useState('')
  const navigate = useNavigate()
  return (
    <SectionWrapper
      img='https://cloud.systec.ar/s/exACdtiRC6sQiPW/download'
      id='hero'
      bg='var(--lightDark)'
    >
      <HeroSectionContainer>
        <HeroLeft>
          <HeroTextContainer>
            Search for your favorite artist, album or song among 90 million
            songs.
          </HeroTextContainer>
          <HeroSearchContainer
            onSubmit={() => {
              navigate(`/search/${search}`)
            }}
          >
            <SearchInput
              onChange={(e) => setsearch(e.target.value)}
              placeholder='Search albums o artists'
              value={search}
            />
            <ButtonPrimary>Search</ButtonPrimary>
          </HeroSearchContainer>
        </HeroLeft>
      </HeroSectionContainer>
    </SectionWrapper>

    /* url(${({ imgsrc }) => `${imgsrc}`}) 0 20% / cover no-repeat; */
  )
}

export default Hero
