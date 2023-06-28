import React, { useEffect } from 'react'
import { useProducts } from '../../hooks/useProducts'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/products/productsSlice'
import productos from '../../data/products.json'
import ProductCard from './CardProduct/AlbumCard'
import { ProductsSection } from './AlbumsStd'
import { useAlbums } from '../../hooks/useAlbums'
import AlbumCard from './CardProduct/AlbumCard'

const Albums = () => {
  const { products } = useSelector((state) => state.products)
  const dispatch = useDispatch()
  console.log('PRODUCTS IN JSX', products)

  // const { fetchProducts } = useProducts()
  const { fetchAlbums } = useAlbums()

  useEffect(() => {
    fetchAlbums({})
    // fetchProducts()
    // dispatch(getProducts(productos.products))
  }, [])

  return (
    <ProductsSection>
      {products?.map((product) => {
        return <AlbumCard key={product.id} {...product} />
      })}
    </ProductsSection>
  )
}

export default Albums
