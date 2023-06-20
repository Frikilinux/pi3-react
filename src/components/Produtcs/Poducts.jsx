import React, { useEffect } from 'react'
import { useProducts } from '../../hooks/useProducts'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/products/productsSlice'
import productos from '../../data/products.json'
import ProductCard from './CardProduct/ProductCard'
import { ProductsSection } from './ProductsStd'

const Products = () => {
  const { products } = useSelector((state) => state.products)
  const dispatch = useDispatch()
  console.log('PRODUCTS IN JSX', products)

  const { fetchProducts } = useProducts()

  useEffect(() => {
    // fetchProducts()
    dispatch(getProducts(productos.products))
  }, [])

  return (
    <ProductsSection>
      {products?.map((product) => {
        return <ProductCard key={product.id} {...product} />
      })}
    </ProductsSection>
  )
}

export default Products
