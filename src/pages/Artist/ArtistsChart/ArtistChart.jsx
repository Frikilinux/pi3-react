import React, { useEffect, useState } from 'react'
import SectionWrapper from '../../../components/UI/SectionWrapper/SectionWrapper'
import Main from '../../../components/UI/MainWrapper/MainWrapper'
import SearchArtist from '../../../components/SearchArtist/SearchArtist'
import { ArtistSectionTitle } from '../ArtistStd'
import {
  ArtistChartGenreContainer,
  ArtisthartContainer,
  ChartContainer,
} from './ArtistChartStd'
import { useArtist } from '../../../hooks/useArtist'
import ArtistCard from '../ArtistCard/ArtistCard'

const ArtistChart = () => {
  const [charts, setCharts] = useState({})
  const { getArtistChart } = useArtist()

  useEffect(() => {
    const fetchCharts = async () => {
      const [popChart, generalChart, alternativeChart, rockChart, danceChart] =
        await Promise.all([
          getArtistChart({}),
          getArtistChart({ genreId: '132' }),
          getArtistChart({ genreId: '85' }),
          getArtistChart({ genreId: '152' }),
          getArtistChart({ genreId: '113' }),
        ])

      setCharts({
        popChart,
        generalChart,
        alternativeChart,
        rockChart,
        danceChart,
      })
    }

    fetchCharts()
  }, [])

  return (
    <Main>
      <Main>
        <SectionWrapper bg='var(--lightDark)' id='search-artists'>
          <div>The most popular artist in the world</div>
          <SearchArtist />
        </SectionWrapper>

        <SectionWrapper bg='var(--lightDark)' id='artists-chart'>
          <ArtisthartContainer>
            <ArtistChartGenreContainer>
              <ArtistSectionTitle>Top 5 all artist</ArtistSectionTitle>
              <ChartContainer>
                {charts.generalChart?.map((artist) => (
                  <ArtistCard key={artist.id} {...artist} />
                ))}
              </ChartContainer>
            </ArtistChartGenreContainer>
            <ArtistChartGenreContainer>
              <ArtistSectionTitle>Top 5 Pop artist</ArtistSectionTitle>
              <ChartContainer>
                {charts.popChart?.map((artist) => (
                  <ArtistCard key={artist.id} {...artist} />
                ))}
              </ChartContainer>
            </ArtistChartGenreContainer>
            <ArtistChartGenreContainer>
              <ArtistSectionTitle>Top 5 Alternative artist</ArtistSectionTitle>
              <ChartContainer>
                {charts.alternativeChart?.map((artist) => (
                  <ArtistCard key={artist.id} {...artist} />
                ))}
              </ChartContainer>
            </ArtistChartGenreContainer>
            <ArtistChartGenreContainer>
              <ArtistSectionTitle>Top 5 Rock artist</ArtistSectionTitle>
              <ChartContainer>
                {charts.rockChart?.map((artist) => (
                  <ArtistCard key={artist.id} {...artist} />
                ))}
              </ChartContainer>
            </ArtistChartGenreContainer>
            <ArtistChartGenreContainer>
              <ArtistSectionTitle>Top 5 Dance artist</ArtistSectionTitle>
              <ChartContainer>
                {charts.danceChart?.map((artist) => (
                  <ArtistCard key={artist.id} {...artist} />
                ))}
              </ChartContainer>
            </ArtistChartGenreContainer>
          </ArtisthartContainer>
        </SectionWrapper>
      </Main>
    </Main>
  )
}

export default ArtistChart
