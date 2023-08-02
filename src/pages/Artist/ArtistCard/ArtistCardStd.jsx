import { styled } from 'styled-components'

const ArtistCardContainer = styled.div`
margin-left: 50px;
  align-items: center;
  display: flex;
  position: relative;
  min-width: 300px;
  /* height: 250px; */

  @media (max-width: 576px) {
    min-width: 180px;
    height: 180px;

  }
  &:hover {
    cursor: pointer;
  }
`

const ArtistCardImg = styled.img`
  border-radius: 50%;
  border: 10px solid #afb9cf75;
  width: 80%;
  height: auto;
`

const ArrtistChartposition = styled.div`
width: 100%;
left: -50px;
text-align: left;
  font-size: 10rem;
  font-weight: 700;
  position: absolute;
  & p {
    text-align: end;
    right: 0;
    font-size: 1.2rem;

  }
`

export { ArtistCardContainer, ArtistCardImg, ArrtistChartposition }
