import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import categorias from '../../../data/categories.json'
import { getCategories } from '../../../redux/categories/categoriesSlice'
import { CategoriesContainer, Category } from './CategoriesStd'
import { useCategories } from '../../../hooks/useCategories'
import { useProducts } from '../../../hooks/useProducts'
import { useGenres } from '../../../hooks/useGenres'

const Categories = () => {
  const dispatch = useDispatch()
  const {fetchGenres} = useGenres()
  const { fetchProductsCategory, fetchProducts } = useProducts()

  const { categories } = useSelector((state) => state.categories)
  useEffect(() => {
    fetchGenres()
    // dispatch(getCategories(categorias))
  }, [])

  return (
    <CategoriesContainer>
      <Category onClick={() => fetchProducts()}>Todas</Category>
      {categories?.map(({id, name, picture}) => {
        // const newCat = category.split('-').join(' ')
        return (
          <Category id={id}
            onClick={() => fetchProductsCategory(category)}
            key={id}
          >
            {name}
          </Category>
        )
      })}
    </CategoriesContainer>
  )
}

export default Categories
