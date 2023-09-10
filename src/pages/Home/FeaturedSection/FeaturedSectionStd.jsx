import { styled } from 'styled-components'

const AlbumsChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  width: 90%;
  max-width: 1300px;
  min-height: calc(100vh - 130px);
  gap: 20px;
  @media (max-width: 576px) {
    width: 100%;
    gap: 15px;
  }
`

const AlbumsChartGenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ChartTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  color: var(--white);
  font-size: 2rem;
  & span {
    cursor: pointer;
    color: var(--green);
    font-weight: 500;
    font-size: 1.5rem;
    &:hover {
      color: var(--red);
    }
  }
`

const ChartContainer = styled.div`
  border-radius: 20px;
  padding: 30px;
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
  AlbumsChartContainer,
  AlbumsChartGenreContainer,
  ChartContainer,
  ChartTitle,
}
