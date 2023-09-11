import React from 'react'
import { useSelector } from 'react-redux'
import { AlbumsContainer } from './AlbumsStd'
import { useAlbums } from '../../hooks/useAlbums'
import AlbumCard from './AlbumCard/AlbumCard'
import InfiniteScroll from 'react-infinite-scroll-component'

const Albums = () => {
  const { albums, next, currentGenre } = useSelector((state) => state.albums)

  const { fetchAlbums } = useAlbums()

  return (
    <InfiniteScroll
      dataLength={albums ? albums.length : 0}
      next={() =>
        fetchAlbums({
          next,
          genreId: currentGenre.genreId,
          genreName: currentGenre.genreName,
        })
      }
      hasMore={next}
      // style={{width: '100%'}}
    >
      <AlbumsContainer>
        {albums?.map((album) => {
          return <AlbumCard key={album.id} {...album} />
        })}
      </AlbumsContainer>
    </InfiniteScroll>
  )
}

export default Albums
