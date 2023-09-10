import React, { useEffect, useState } from 'react'
import SectionWrapper from '../../../components/UI/SectionWrapper/SectionWrapper'
import { useAlbums } from '../../../hooks/useAlbums'
import AlbumCard from '../../../components/Albums/AlbumCard/AlbumCard'
import {
  AlbumsChartContainer,
  AlbumsChartGenreContainer,
  ChartContainer,
  ChartTitle,
} from './FeaturedSectionStd'
import { useNavigate } from 'react-router-dom'
import { useArtist } from '../../../hooks/useArtist'
import ArtistCard from '../../../components/Artist/ArtistCard/ArtistCard'

const FeaturedSection = () => {
  const [charts, setCharts] = useState({})
  const { getAlbumsChart, getAlbumsByGenre } = useAlbums()
  const { getArtistChart } = useArtist()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCharts = async () => {
      const [allChart, artistChart, popChart, rockChart] = await Promise.all([
        getAlbumsChart({}),
        getArtistChart({ genreId: '132' }),
        getAlbumsChart({ genreId: '132' }),
        getAlbumsChart({ genreId: '152' }),
      ])

      setCharts({
        allChart,
        artistChart,
        popChart,
        rockChart,
      })
    }

    fetchCharts()
  }, [])

  return (
    <SectionWrapper bg='#412a5c' id='artists-chart'>
      <AlbumsChartContainer>
        <AlbumsChartGenreContainer>
          <ChartTitle>
            Most wanted albums
            <span
              onClick={() => {
                getAlbumsByGenre({ genreId: 0, genreName: 'All' })
                navigate('/albums')
              }}
            >
              Discover more
            </span>
          </ChartTitle>
          <ChartContainer>
            {charts.allChart?.map((album) => (
              <AlbumCard key={album.id} {...album} />
            ))}
          </ChartContainer>
        </AlbumsChartGenreContainer>

        <AlbumsChartGenreContainer>
          <ChartTitle>
            Most wanted Artist
            <span
              onClick={() => {
                navigate('/artist')
              }}
            >
              Discover more
            </span>
          </ChartTitle>
          <ChartContainer>
            {charts.artistChart?.map((artist) => (
              <ArtistCard key={artist.id} {...artist} />
            ))}
          </ChartContainer>
        </AlbumsChartGenreContainer>

      </AlbumsChartContainer>
    </SectionWrapper>
  )
}

export default FeaturedSection
