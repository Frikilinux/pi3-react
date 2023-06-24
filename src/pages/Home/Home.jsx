import React from 'react'
import Products from '../../components/Produtcs/Poducts'
import Genres from '../../components/Produtcs/Categories/Genres'

export const Home = () => {
  return (
    <>
      <div>PAGE HOME</div>
      <Genres />
      <Products>PRODUCTS</Products>
    </>
  )
}
