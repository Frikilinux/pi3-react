import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productos from '../../data/products.json'
import { AlbumsContainer } from './AlbumsStd'
import { useAlbums } from '../../hooks/useAlbums'
import AlbumCard from './CardProduct/AlbumCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from '../Spinner/Spinner'

const Albums = () => {
  const { albums, next, currentGenre, isFetching, total } = useSelector(
    (state) => state.albums,
  )

  // const { fetchProducts } = useProducts()
  const { getAlbumsByGenre } = useAlbums()

  // useEffect(() => {
    // getAlbumsByGenre({})
    // fetchProducts()
    // dispatch(getProducts(productos.products))
  // }, [])

  return (
    <InfiniteScroll
      dataLength={albums ? albums.length : 0}
      next={() => getAlbumsByGenre({ next })}
      hasMore={next}
    >
      <AlbumsContainer>
        {albums.map((album) => {
          return <AlbumCard key={album.id} {...album} />
        })}
      </AlbumsContainer>
    </InfiniteScroll>
  )
}

export default Albums
