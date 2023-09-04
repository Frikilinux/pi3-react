import { styled } from 'styled-components'

const ArtistCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  position: relative;
  min-width: 300px;

  @media (max-width: 576px) {
    min-width: 150px;
    height: auto;
  }
  &:hover {
    cursor: pointer;
  }
`

const ArtistCardImg = styled.img`
  /* border-radius: 50%; */
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: auto;
`

const ArtistChartArtistStatus = styled.div`
  /* height: 40px; */
  display: flex;
  justify-content: flex-start;
  padding: 5px 10px;
  gap: 10px;
  align-items: center;
  width: 100%;
  background-color: var(--dark);
`

const ArtistChartposition = styled.div`
  color: var(--green);
  text-align: center;
  font-size: 2rem;
  width: 30px;
  font-weight: 700;
  @media (max-width: 576px) {
    font-size: 1.3rem;
  }
`

const ArtisChartArtistName = styled.div`
  font-weight: 500;
  bottom: 0;
  font-size: 1.2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media (max-width: 576px) {
  font-size: 1rem;
  }
`

export {
  ArtistCardContainer,
  ArtistCardImg,
  ArtistChartposition,
  ArtisChartArtistName,
  ArtistChartArtistStatus,
}
