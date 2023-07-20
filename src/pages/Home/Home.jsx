import React, { useEffect, useRef } from 'react'
import Genres from '../../components/Albums/Categories/Genres'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import { AlbumsSection } from '../../components/Albums/AlbumsSection/AlbumsSection'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import { useAlbums } from '../../hooks/useAlbums'
import { useSelector } from 'react-redux'
import InfoModal from '../../components/InfoModal/InfoModal'
import { AnimatePresence } from 'framer-motion'
import { useInfoModal } from '../../hooks/useInfoModal'
import Hero from '../../components/Hero/Hero'

export const Home = () => {
  const { currentGenre, isFetching } = useSelector(({ albums }) => albums)
  const { getAlbumsByGenre } = useAlbums()
  const { isVisible } = useInfoModal()
  const albumsSection = useRef(null)

  useEffect(() => {
    !isFetching && getAlbumsByGenre({ genreId: currentGenre })
    // fetchProducts()
    // dispatch(getProducts(productos.products))
  }, [])

  const genreClick = () => {
    albumsSection.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Main>
      {/* {console.log('VISIBLE?', isVisible)}
      <AnimatePresence>{isVisible && <InfoModal />}</AnimatePresence> */}

      <Hero />

      <SectionWrapper ref={albumsSection} bg='var(--lightDark)' id='albums'>
        <Genres genreClick={genreClick} />
        <AlbumsSection />
      </SectionWrapper>
    </Main>
  )
}
