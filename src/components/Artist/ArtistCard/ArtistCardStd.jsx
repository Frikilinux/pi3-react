import { motion } from 'framer-motion'
import styled from 'styled-components'

const ArtistCardContainer = styled.div`
  /* width: 260px; */
  position: relative;
  box-shadow: 0px 0px 29px 2px rgba(0, 0, 0, 0.55);
  border-radius: 10px 10px 0 0;
  @media (max-width: 576px) {
    /* height: 160px; */
    width: 160px;
  }
  @media (max-width: 380px) {
    /* height: 140px; */
    width: 140px;
  }
`

const ArtistCardImg = styled.div.attrs((props) => ({
  style: {
    background: `var(--grey) url(${props.$imgsrc}) center/cover no-repeat`,
  },
}))`
  width: 260px;
  height: 260px;
  border-radius: 10px 10px 0 0;
  @media (max-width: 576px) {
    height: 160px;
    width: 160px;
  }
  @media (max-width: 380px) {
    height: 140px;
    width: 140px;
  }
`

const ArtistInfo = styled.div`
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

const OverlayPreview = styled(motion.div)`
  font-size: 3rem;
  font-weight: 400;
  color: var(--grey);
  position: absolute;
  z-index: 5;
  opacity: 0;
  display: flex;
  justify-content: center;
  place-items: center;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  background-color: #201e20b2;
  border-radius: 10px 10px 0 0;
  &:hover {
    cursor: pointer;
    visibility: visible;
    opacity: 1;
    /* display: flex; */
  }
`

export {
  ArtistCardContainer,
  ArtistCardImg,
  ArtistInfo,
  OverlayPreview,
  ArtistChartposition,
  ArtisChartArtistName,
}
