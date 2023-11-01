import React from 'react'
import { ArtistChartGenreContainer, ChartContainer } from './ArtistChartStd'
import { ArtistSectionTitle } from '../ArtistStd'
import ArtistCard from '../../../components/Artist/ArtistCard/ArtistCard'
import { IconWhirl } from '@tabler/icons-react'
import Spinner from '../../../components/Spinner/Spinner'

const Chart = ({ chart, title }) => {
  const SpinnerCompo = (
    <Spinner>
      <IconWhirl size='4rem' color='var(--grey)' />
    </Spinner>
  )
  return (
    <ArtistChartGenreContainer>
      <ArtistSectionTitle>{title}</ArtistSectionTitle>
      {!chart ? (
        SpinnerCompo
      ) : (
        <ChartContainer>
          {chart?.map((artist) => (
            <ArtistCard key={artist.id} {...artist} />
          ))}
        </ChartContainer>
      )}
    </ArtistChartGenreContainer>
  )
}

export default Chart
