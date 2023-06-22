import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import categorias from '../../../data/categories.json'
import { getCategories } from '../../../redux/categories/categoriesSlice'
import { CategoriesContainer, Category } from './CategoriesStd'
import { useCategories } from '../../../hooks/useCategories'
import { useProducts } from '../../../hooks/useProducts'

const Categories = () => {
  const dispatch = useDispatch()
  const { fetchCategories } = useCategories()
  const { fetchProductsCategory, fetchProducts } = useProducts()

  const { categories } = useSelector((state) => state.categories)
  useEffect(() => {
    // fetchCategories()
    dispatch(getCategories(categorias))
  }, [])

  return (
    <CategoriesContainer>
      <Category onClick={() => fetchProducts()}>Todas</Category>
      {categories?.map((category) => {
        const newCat = category.split('-').join(' ')
        return (
          <Category
            onClick={() => fetchProductsCategory(category)}
            key={category}
          >
            {newCat}
          </Category>
        )
      })}
    </CategoriesContainer>
  )
}

export default Categories
