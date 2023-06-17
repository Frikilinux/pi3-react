import React, { useEffect } from 'react'
import { useProducts } from '../../hooks/useProducts'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/products/productsSlice'
import productos from '../../data/products.json'

const Products = () => {
  const { products } = useSelector((state) => state.products)
  const dispatch = useDispatch()
  console.log('PRODUCTS IN JSX', products);

  // const { fetchProducts } = useProducts()

  useEffect(() => {
    dispatch(getProducts(productos.products))
  }, [])

  return (
    <div>{products?.map(({ id, title, thumbnail, price, stock }) => {
      return (
        <div key={id}>
          <h2>{title}</h2>
          <img src={thumbnail} alt="" />
          <h3>$ {price}</h3>
          <h3>En stock: {stock}</h3>

        </div>
      )
    })}</div>
  )
}

export default Products
