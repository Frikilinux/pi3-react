import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../../redux/categories/categoriesSlice'
import { Genre, GenreImg, GenresContainer } from './GenresStd'
import { useCategories } from '../../../hooks/useCategories'
import { useProducts } from '../../../hooks/useProducts'
import { useGenres } from '../../../hooks/useGenres'
import { useAlbums } from '../../../hooks/useAlbums'

const Genres = () => {
  // const dispatch = useDispatch()
  const { fetchGenres } = useGenres()
  // const { fetchProductsCategory, fetchProducts } = useProducts()
  const { fetchAlbums } = useAlbums()

  const { categories } = useSelector((state) => state.categories)
  useEffect(() => {
    fetchGenres()
    // dispatch(getCategories(categorias))
  }, [])

  return (
    <GenresContainer>
      {categories?.map(({ id, name, picture_small: pictureSmall }) => {
        return (
          <Genre
            id={id}
            onClick={() => {
              fetchAlbums({ genreId: id })
            }}
            key={id}
          >
            <GenreImg src={pictureSmall} />
            <p>{name}</p>
          </Genre>
        )
      })}
    </GenresContainer>
  )
}

export default Genres
