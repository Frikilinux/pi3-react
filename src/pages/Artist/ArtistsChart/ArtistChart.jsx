import React, { useEffect, useState } from 'react'
import SectionWrapper from '../../../components/UI/SectionWrapper/SectionWrapper'
import Main from '../../../components/UI/MainWrapper/MainWrapper'
// import SearchArtist from '../../../components/SearchArtist/SearchArtist'
import {
  ArtistChartContainer,
  ArtistSearchSectionContainer,
  ArtistSearchTitle,
} from './ArtistChartStd'
import { useArtist } from '../../../hooks/useArtist'
import Chart from './Chart'

const ArtistChart = () => {
  const [charts, setCharts] = useState({})
  const { getArtistChart } = useArtist()

  useEffect(() => {
    const getCharts = async () => {
      const [generalChart, popChart, alternativeChart, rockChart, danceChart] =
        await Promise.all([
          getArtistChart({ limit: '5' }),
          getArtistChart({ genreId: '132', limit: '5' }),
          getArtistChart({ genreId: '85', limit: '5' }),
          getArtistChart({ genreId: '152', limit: '5' }),
          getArtistChart({ genreId: '113', limit: '5' }),
        ])

      setCharts({
        popChart,
        generalChart,
        alternativeChart,
        rockChart,
        danceChart,
      })
    }
    getCharts()
  }, [])

  return (
    <Main>
      {/* <SectionWrapper bg='#ce4a76' id='search-artists'>
        <ArtistSearchSectionContainer>
          <ArtistSearchTitle>
            Search between the most popular artist in the world
          </ArtistSearchTitle>
          <SearchArtist placeholder={'Artist name'} />
        </ArtistSearchSectionContainer>
      </SectionWrapper> */}
      <SectionWrapper bg='#ce4a76' id='search-artists'>
        <ArtistSearchSectionContainer>
          <ArtistSearchTitle>
            The most popular artist in the world
          </ArtistSearchTitle>
          {/* <SearchArtist placeholder={'Artist name'} /> */}
        </ArtistSearchSectionContainer>
      </SectionWrapper>

      <SectionWrapper bg='var(--lightDark)' id='artists-chart'>
        <ArtistChartContainer>
          <Chart chart={charts.generalChart} title={'Top 5 All'} />
          <Chart chart={charts.popChart} title={'Top 5 Pop'} />
          <Chart chart={charts.alternativeChart} title={'Top 5 Alternative'} />
          <Chart chart={charts.rockChart} title={'Top 5 Rock'} />
          <Chart chart={charts.danceChart} title={'Top 5 Dance'} />
        </ArtistChartContainer>
      </SectionWrapper>
    </Main>
  )
}

export default ArtistChart
