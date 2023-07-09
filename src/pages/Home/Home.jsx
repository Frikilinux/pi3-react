import React from 'react'
import Genres from '../../components/Albums/Categories/Genres'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import { AlbumsSection } from '../../components/Albums/AlbumsSection/AlbumsSection'
import Main from '../../components/UI/MainWrapper/MainWrapper'

export const Home = () => {
  return (
    <Main>
      <SectionWrapper bg='var(--dark)' id='albums'>
        <Genres />
        <AlbumsSection />
      </SectionWrapper>
      <SectionWrapper id='contact'></SectionWrapper>
    </Main>
  )
}
