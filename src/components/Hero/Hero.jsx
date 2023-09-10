import React, { useState } from 'react'
import {
  HeroImg,
  HeroImgContainer,
  HeroLeft,
  HeroRight,
  HeroSectionContainer,
  HeroStats,
  HeroStatsContainer,
  HeroTextContainer,
} from './HeroStd'
import SectionWrapper from '../UI/SectionWrapper/SectionWrapper'
import SearchArtist from '../SearchArtist/SearchArtist'

const Hero = () => {
  return (
    <SectionWrapper id='hero' bg='#8d99ae'>
      <HeroSectionContainer>
        <HeroLeft>
          <HeroTextContainer>
            <h1>Studio quality digital music</h1>
            <h2>Audio with the same quality with which it was mastered.</h2>
          </HeroTextContainer>
          <HeroStatsContainer>
            <HeroStats>
              <h2>1.5K+</h2>
              <div>
                <p>Albums</p>
                <p>Every week</p>
              </div>
            </HeroStats>
            <HeroStats>
              <div>
                <h2>90M+</h2>
              </div>
              <div>
                <p>Tracks</p>
                <p>
                  HiRes <strong>Quality</strong>
                </p>
              </div>
            </HeroStats>
          </HeroStatsContainer>
          {/* <SearchArtist /> */}
        </HeroLeft>
        <HeroRight>
          {/* <HeroImgContainer> */}
            <HeroImg
              src='https://res.cloudinary.com/dixlr2ujp/image/upload/v1694300861/Integrador/v0folib1imhdqqmgcjnr.png'
              title='listen_man'
            />
          {/* </HeroImgContainer> */}
        </HeroRight>
      </HeroSectionContainer>
    </SectionWrapper>
  )
}

export default Hero
