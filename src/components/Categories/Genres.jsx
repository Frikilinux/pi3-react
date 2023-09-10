import React from 'react'
import { useSelector } from 'react-redux'
import { Genre, GenresContainer } from './GenresStd'
import { useAlbums } from '../../hooks/useAlbums'
import { useNavigate } from 'react-router-dom'
import generos from '../../data/genres.json'
import useButtons from '../../hooks/useButtons'

const Genres = ({ genreClick }) => {
  const { currentGenre } = useSelector(({ albums }) => albums)
  const { getAlbumsByGenre } = useAlbums()
  const { hideAllModals } = useButtons()
  const navigate = useNavigate()

  return (
    <GenresContainer>
      {generos?.data.map(({ id, name }) => {
        return (
          <Genre
            id={id}
            onClick={
              (genreClick,
              () => {
                navigate('/albums')
                getAlbumsByGenre({ genreId: id, genreName: name })
                hideAllModals()
                window.scrollTo(0, 0)
              })
            }
            key={id}
            selected={id === currentGenre.genreId ? 1 : 0}
          >
            <p>{name}</p>
          </Genre>
        )
      })}
    </GenresContainer>
  )
}

export default Genres
