import React from 'react'
import Genres from '../../components/Albums/Categories/Genres'
import Albums from '../../components/Albums/Albums'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import { AlbumsSection } from '../../components/Albums/AlbumsSection/AlbumsSection'

export const Home = () => {
  return (
    <SectionWrapper id='albums'>
      <Genres />
      <AlbumsSection />
    </SectionWrapper>
  )
}
