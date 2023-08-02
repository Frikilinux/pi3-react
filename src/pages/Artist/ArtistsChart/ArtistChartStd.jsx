import { styled } from 'styled-components'

const ArtisthartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1300px;
  min-height: calc(100vh - 130px);
`

const ArtistChartGenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ChartContainer = styled.div`
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  border-radius: 20px;
  padding: 30px 0;
  display: flex;
  gap: 5px;
  width: 100%;
  overflow: scroll;
`

export { ArtisthartContainer, ArtistChartGenreContainer, ChartContainer }
