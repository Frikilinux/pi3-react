import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import { useSelector } from 'react-redux'
import { useArtist } from '../../hooks/useArtist'
import { AlbumsSection } from '../../components/Albums/AlbumsSection/AlbumsSection'
import { useAlbums } from '../../hooks/useAlbums'
import {
  ArtistContainer,
  ArtistFans,
  ArtistImg,
  ArtistInfo,
  ArtistInfoContainer,
  ArtistInfoName,
  ArtistSectionTitle,
} from './ArtistStd'
import { formatQuantityNumber } from '../../utils/formatNumbers'

const Artist = () => {
  const { artist } = useSelector(({ artist }) => artist)
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
      <SectionWrapper
        img='https://cloud.systec.ar/s/MzgkA9ZKQYmKXbN/download'
        id='artist-info'
      >
        <ArtistContainer>
          <ArtistInfoContainer imgsrc={pictureXl}>
            <ArtistInfo>
              <ArtistInfoName>{name}</ArtistInfoName>
              <ArtistFans>{formatQuantityNumber(nbFan) } Fans </ArtistFans>
            </ArtistInfo>
            <ArtistImg src={pictureXl} />
          </ArtistInfoContainer>
        </ArtistContainer>
      </SectionWrapper>
      <SectionWrapper bg='var(--lightDark)' id='artist-albums'>
        <ArtistSectionTitle>
          All albums from <span>{name}</span> 
        </ArtistSectionTitle>
        <AlbumsSection />
      </SectionWrapper>
    </Main>
  )
}

export default Artist
