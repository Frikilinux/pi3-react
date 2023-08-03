import React, { useEffect} from 'react'
import Genres from '../../components/Albums/Categories/Genres'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import { AlbumsSection } from '../../components/Albums/AlbumsSection/AlbumsSection'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import { useAlbums } from '../../hooks/useAlbums'
import { useSelector } from 'react-redux'
import Hero from '../../components/Hero/Hero'

export const Home = () => {
  const { currentGenre, isFetching } = useSelector(({ albums }) => albums)
  const { getAlbumsByGenre } = useAlbums()

  useEffect(() => {
    !isFetching && getAlbumsByGenre({ genreId: currentGenre })
  }, [])

  return (
    <Main>
      <Hero />
      <SectionWrapper bg='var(--lightDark)' id='albums'>
      </SectionWrapper>
    </Main>
  )
}
