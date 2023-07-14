import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import { useSelector } from 'react-redux'
import { useArtist } from '../../hooks/useArtist'
import { AlbumsSection } from '../../components/Albums/AlbumsSection/AlbumsSection'
import { useAlbums } from '../../hooks/useAlbums'
import { ArtistImg, ArtistInfoContainer, ArtistInfoName } from './ArtistStd'

const Artist = () => {
  const { artist, isError } = useSelector(({ artist }) => artist)
  const { artistId } = useParams()
  const { getArtistById } = useArtist()
  const { getArtistAlbums } = useAlbums()
  const { picture_xl: pictureXl, name, nb_fan: nbFan } = artist

  useEffect(() => {
    getArtistById(artistId)
    getArtistAlbums({ artistId })
  }, [artistId])

  return (
    <Main>
      <ArtistInfoContainer imgsrc={pictureXl}>
        <div>
          <ArtistInfoName>{name}</ArtistInfoName>
          <p>{nbFan} Followers </p>
        </div>
        <ArtistImg src={pictureXl} />
      </ArtistInfoContainer>

      <SectionWrapper bg='var(--lightDark)' id='Artits'>
        {console.log('ARTIST PAGE', artist)}

        <AlbumsSection />
      </SectionWrapper>
    </Main>
  )
}

export default Artist
