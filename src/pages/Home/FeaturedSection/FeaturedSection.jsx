import React, { useEffect, useState } from 'react'
import SectionWrapper from '../../../components/UI/SectionWrapper/SectionWrapper'
import { ArtistSectionTitle } from '../../Artist/ArtistStd'
// import {
//   ArtistChartContainer,
//   ArtistChartGenreContainer,
//   ChartContainer,
// } from '../../Artist/ArtistsChart/ArtistChartStd'
import { useAlbums } from '../../../hooks/useAlbums'
import AlbumCard from '../../../components/Albums/AlbumCard/AlbumCard'
import {
  AlbumsChartContainer,
  AlbumsChartGenreContainer,
  ChartContainer,
  ChartTitle,
} from './FeaturedSectionStd'
import { IconArrowBigRightLinesFilled } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'

const FeaturedSection = () => {
  const [charts, setCharts] = useState({})
  const { getAlbumsChart, getAlbumsByGenre } = useAlbums()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCharts = async () => {
      const [allChart, popChart, rockChart] = await Promise.all([
        getAlbumsChart({}),
        getAlbumsChart({ genreId: '132' }),
        getAlbumsChart({ genreId: '152' }),
      ])

      setCharts({
        allChart,
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
              Discover more <IconArrowBigRightLinesFilled size={18} />
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
            Most wanted Pop albums
            <span
              onClick={() => {
                getAlbumsByGenre({ genreId: 132, genreName: 'Pop' })
                navigate('/albums')
              }}
            >
              Discover more <IconArrowBigRightLinesFilled size={18} />
            </span>
          </ChartTitle>
          <ChartContainer>
            {charts.popChart?.map((album) => (
              <AlbumCard key={album.id} {...album} />
            ))}
          </ChartContainer>
        </AlbumsChartGenreContainer>
        <AlbumsChartGenreContainer>
          <ChartTitle>
            Most wanted Rock albums
            <span
              onClick={() => {
                getAlbumsByGenre({ genreId: 152, genreName: 'Rock' })
                navigate('/albums')
              }}
            >
              Discover more <IconArrowBigRightLinesFilled size={18} />
            </span>
          </ChartTitle>
          <ChartContainer>
            {charts.rockChart?.map((album) => (
              <AlbumCard key={album.id} {...album} />
            ))}
          </ChartContainer>
        </AlbumsChartGenreContainer>
      </AlbumsChartContainer>
    </SectionWrapper>
  )
}

export default FeaturedSection
