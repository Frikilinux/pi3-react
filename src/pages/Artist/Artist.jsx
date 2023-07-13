import React from 'react'
import { useParams } from 'react-router-dom'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import Main from '../../components/UI/MainWrapper/MainWrapper'

export const Artist = () => {
  const { artistId } = useParams()

  return (
    <Main>
      <SectionWrapper bg='var(--lightDark)' id='Artits'>
        <div>Artist ID {artistId}</div>
      </SectionWrapper>
    </Main>
  )
}
