import React from 'react'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import { useParams } from 'react-router-dom'
import ArtistWithId from './ArtistWithId'
import ArtistChart from './ArtistChart'

const Artist = () => {
  const { artistId } = useParams()

  return (
    artistId ? <ArtistWithId /> : <ArtistChart />

  )
}

export default Artist
