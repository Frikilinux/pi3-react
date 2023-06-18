import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import categorias from '../../../data/categories.json'
import { getCategories } from '../../../redux/categories/categoriesSlice'
import { CategoriesContainer, Category } from './CategoriesStd'
import { useCategories } from '../../../hooks/useCategories'

const Categories = () => {
  const dispatch = useDispatch()
  const {fetchCategories} = useCategories()

  const { categories } = useSelector((state) => state.categories)
  useEffect(() => {
    fetchCategories()
    // dispatch(getCategories(categorias))
  }, [])

  return (
    <CategoriesContainer>
      {categories?.map((category) => {
        const newCat = category.split('-').join(' ')
        return <Category key={category}>{newCat}</Category>
      })}
    </CategoriesContainer>
  )
}

export default Categories
