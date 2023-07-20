import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Genre, GenreImg, GenresContainer } from './GenresStd'
import { useGenres } from '../../../hooks/useGenres'
import { useAlbums } from '../../../hooks/useAlbums'
import { useNavigate } from 'react-router-dom'

const Genres = ({ genreClick }) => {
  const { fetchGenres } = useGenres()
  const { getAlbumsByGenre } = useAlbums()
  const navigate = useNavigate()

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
            onClick={
              (genreClick,
              () => {
                getAlbumsByGenre({ genreId: id })
              })
            }
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
