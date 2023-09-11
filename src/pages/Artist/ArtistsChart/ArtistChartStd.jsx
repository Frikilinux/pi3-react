import { styled } from 'styled-components'

const ArtistSearchSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1300px;
  padding: 80px 0 40px;
  gap: 50px;
`

const ArtistSearchTitle = styled.h1`
  color: var(--dark);
  font-size: 2rem;
  @media (max-width: 576px) {
    text-align: center;
  }
`

const ArtistChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1300px;
  min-height: calc(100vh - 130px);
  gap: 20px;
  @media (max-width: 576px) {
    width: 100%;
    gap: 15px;
  }
`

const ArtistChartGenreContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ChartContainer = styled.div`
  border-radius: 20px;
  padding: 20px 30px;
  display: flex;
  gap: 50px;
  width: 100%;
  overflow: scroll;
  &::-webkit-scrollbar {
    height: 10px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--blue);
    border-radius: 5px;
  }
  &::-webkit-scrollbar:vertical {
    display: none;
  }
  @media (max-width: 576px) {
    gap: 30px;
  }
`

export {
  ArtistChartContainer,
  ArtistChartGenreContainer,
  ChartContainer,
  ArtistSearchSectionContainer,
  ArtistSearchTitle,
}
