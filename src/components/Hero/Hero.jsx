import React, { useState } from 'react'
import {
  HeroLeft,
  HeroSectionContainer,
  HeroTextContainer,
} from './HeroStd'
import SectionWrapper from '../UI/SectionWrapper/SectionWrapper'
import SearchArtist from '../SearchArtist/SearchArtist'

const Hero = () => {
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
          <SearchArtist />
        </HeroLeft>
      </HeroSectionContainer>
    </SectionWrapper>

  )
}

export default Hero
