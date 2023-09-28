import React from 'react'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import Hero from '../../components/Hero/Hero'
import FeaturedSection from './FeaturedSection/FeaturedSection'
import SearchSection from './SearchSection/SearchSection'
import ContactSection from './ContactSection/ContactSection'

export const Home = () => {
  return (
    <Main>
      <Hero />
      {console.log(import.meta.env.VITE_HELO)}
      <SearchSection />
      <FeaturedSection />
      <ContactSection />
    </Main>
  )
}
