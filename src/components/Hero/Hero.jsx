import React from 'react'
import { HeroSearchContainer, HeroSectionContainer, HeroTextContainer, SearchInput} from './HeroStd'
import SectionWrapper from '../UI/SectionWrapper/SectionWrapper'
import { useState } from 'react'

const Hero = () => {
  const [search, setsearch] = useState('')
  return (
    <SectionWrapper img='https://cloud.systec.ar/s/pSnWqDJzXge9qDS/download'id='contact' bg='var(--lightDark)'>
      <HeroSectionContainer>
        <div>
          <HeroTextContainer>
            Search your favorite artists, album or song between 90 million of song
          </HeroTextContainer>
          <HeroSearchContainer onSubmit={() => {}}>
            <SearchInput onChange={(e) => setsearch(e.target.value)} placeholder='Search albums o artists' value={search}/>
          </HeroSearchContainer>
        </div>
        <div>hero</div>
      </HeroSectionContainer>
    </SectionWrapper>

    /* url(${({ imgsrc }) => `${imgsrc}`}) 0 20% / cover no-repeat; */
  )
}

export default Hero
