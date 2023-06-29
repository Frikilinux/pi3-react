import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Genre, GenreImg, GenresContainer } from './GenresStd'
import { useGenres } from '../../../hooks/useGenres'
import { useAlbums } from '../../../hooks/useAlbums'

const Genres = () => {
  const { fetchGenres } = useGenres()
  const { fetchAlbums } = useAlbums()

  const { categories } = useSelector((state) => state.categories)
  useEffect(() => {
    fetchGenres()
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
