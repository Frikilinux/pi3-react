import React, { useEffect } from 'react'
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

  useEffect(() => {
    !isFetching && getAlbumsByGenre({ genreId: currentGenre })
    // fetchProducts()
    // dispatch(getProducts(productos.products))
  }, [])
  return (
    <Main>
      {/* {console.log('VISIBLE?', isVisible)}
      <AnimatePresence>{isVisible && <InfoModal />}</AnimatePresence> */}

        <Hero/>

      <SectionWrapper bg='var(--lightDark)' id='albums'>
        <Genres />
        <AlbumsSection />
      </SectionWrapper>
    </Main>
  )
}
