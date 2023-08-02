import React from 'react'
import { useParams } from 'react-router-dom'
import ArtistWithId from './ArtistWithId'
import ArtistChart from './ArtistsChart/ArtistChart'

const Artist = () => {
  const { artistId } = useParams()

  return artistId ? <ArtistWithId /> : <ArtistChart />
}

export default Artist
