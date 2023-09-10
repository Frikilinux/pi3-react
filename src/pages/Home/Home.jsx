import React from 'react'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import Hero from '../../components/Hero/Hero'
import FeaturedSection from './FeaturedSection/FeaturedSection'
import SearchSection from './SearchSection/SearchSection'

export const Home = () => {
  return (
    <Main>
      <Hero />
      <SearchSection />
      <FeaturedSection />
    </Main>
  )
}
