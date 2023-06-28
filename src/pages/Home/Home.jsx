import React from 'react'
import Genres from '../../components/Produtcs/Categories/Genres'
import Albums from '../../components/Produtcs/Albums'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'

export const Home = () => {
  return (
    <SectionWrapper bg='red'>
      <Genres />
      <Albums>PRODUCTS</Albums>
    </SectionWrapper>
  )
}
