import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productos from '../../data/products.json'
import { AlbumsContainer } from './AlbumsStd'
import { useAlbums } from '../../hooks/useAlbums'
import AlbumCard from './CardProduct/AlbumCard'

const Albums = () => {
  const { albums, next, currentGenre } = useSelector(
    (state) => state.albums
  )
  console.log('PRODUCTS IN JSX', albums)

  // const { fetchProducts } = useProducts()
  const { fetchAlbums } = useAlbums()

  useEffect(() => {
    fetchAlbums({})
    // fetchProducts()
    // dispatch(getProducts(productos.products))
  }, [])

  return (
    <AlbumsContainer>
      {albums?.map((album) => {
        return <AlbumCard key={album.id} {...album} />
      })}
    </AlbumsContainer>
  )
}

export default Albums
