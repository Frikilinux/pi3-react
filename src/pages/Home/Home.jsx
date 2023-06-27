import React from 'react'
import Genres from '../../components/Produtcs/Categories/Genres'
import Albums from '../../components/Produtcs/Albums'

export const Home = () => {
  return (
    <>
      <img src={'./src/assets/react.svg'} alt='LOGOGOGOGOG' srcSet='' />
      <div>PAGE HOME</div>
      <Genres />
      <Albums>PRODUCTS</Albums>
    </>
  )
}
