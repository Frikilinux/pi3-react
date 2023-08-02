import React from 'react'
import { useSelector } from 'react-redux'
import { AlbumsContainer } from './AlbumsStd'
import { useAlbums } from '../../hooks/useAlbums'
import AlbumCard from './AlbumCard/AlbumCard'
import InfiniteScroll from 'react-infinite-scroll-component'

const Albums = () => {
  const { albums, next } = useSelector((state) => state.albums)

  const { fetchAlbums } = useAlbums()

  return (
    <InfiniteScroll
      dataLength={albums ? albums.length : 0}
      next={() => fetchAlbums({ next })}
      hasMore={next}
    >
      <AlbumsContainer>
        {albums.map((album) => {
          return <AlbumCard key={album.id} {...album} />
        })}
      </AlbumsContainer>
    </InfiniteScroll>
  )
}

export default Albums
