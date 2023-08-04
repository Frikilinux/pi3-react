import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Genre, GenreImg, GenresContainer } from './GenresStd'
import { useGenres } from '../../hooks/useGenres'
import { useAlbums } from '../../hooks/useAlbums'
import { useNavigate } from 'react-router-dom'
import generos from '../../data/genres.json'

const Genres = ({ genreClick }) => {
  const { currentGenre } = useSelector(({ albums }) => albums)
  const { fetchGenres } = useGenres()
  const { getAlbumsByGenre } = useAlbums()
  const navigate = useNavigate()

  // const { categories } = useSelector((state) => state.categories)
  // useEffect(() => {
  //   fetchGenres()
  // }, [])

  return (
    <GenresContainer>
      {generos?.data.map(({ id, name, picture_small: pictureSmall }) => {
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
            selected={id === currentGenre ? 1 : 0}
          >
            {/* <GenreImg src={pictureSmall} /> */}
            <p>{name}</p>
          </Genre>
        )
      })}
    </GenresContainer>
  )
}

export default Genres
