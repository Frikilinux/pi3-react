import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const PreviewContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  top: 6vh;
  position: fixed;
  width: 90%;
  max-width: 875px;
  height: 88vh;
  background: #fff url(${({ imgsrc }) => `${imgsrc}`}) center/cover no-repeat;
  background-color: #201e20;
  z-index: 10;
  border-radius: 15px;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 80px 4px;
  &::after {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    backdrop-filter: blur(3px);
    background-color: #201e20c7;
    border-radius: 15px;
    @media (max-width: 576px) {
      border-radius: 0;
    }
  }
  @media (max-width: 576px) {
    padding: 10px;
    border-radius: 0;
    top: 50px;
    width: 100%;
    height: calc(100vh - 50px);
  }
`

export const AlbumHeaders = styled.div`
  width: 97%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 576px) {
    gap: 1px;
  }
`

export const AlbumImg = styled.img`
  cursor: pointer;
  border-radius: 5px;
  opacity: 0.8;
  width: 22%;
  min-width: 150px;
  height: auto;
  box-shadow:
    0 29px 52px rgba(0, 0, 0, 0.4),
    0 25px 16px rgba(0, 0, 0, 0.2);
  /* background: #ffffff url(${({ imgsrc }) =>
    `${imgsrc}`}) center/cover no-repeat; */
  @media (max-width: 576px) {
    min-width: 80px;
    /* align-self: flex-start; */
    /* height: 150px; */
    /* border-radius: 0; */
  }
`
export const AlbumInfoContainer = styled.div`
  /* background-color: #e673737d; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 70%;
  height: 200px;
  @media (max-width: 576px) {
    width: 78%;
    height: 100px;
  }
  @media (max-width: 380px) {
    width: 72%;
    /* height: 100px; */
  }
`

export const InfoTitle = styled.div`
  font-family: 'Barlow Condensed';
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 3.4rem;
  @media (max-width: 576px) {
    width: 98%;
    font-size: 1.5rem;
  }
`

export const InfoArtist = styled(InfoTitle)`
  display: flex;
  gap: 0px 10px;
  align-items: center;
  font-size: 2rem;
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
  &:hover {
    cursor: pointer;
    color: var(--red);
    cursor: pointer;
  }
`

export const InfoContrib = styled(InfoArtist)`
  flex-wrap: wrap;
  font-size: 1rem;
  &:hover {
    cursor: unset;
    color: inherit;
  }
  & P {
    &:hover {
      cursor: pointer;
      color: var(--red);
    }
  }
  @media (max-width: 576px) {
    font-size: 0.6rem;
  }
`

export const ExtraInfoContainer = styled.div`
  color: var(--grey);
  width: 97%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 0.8rem;
`

export const ExtraInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  flex-wrap: wrap;
  @media (max-width: 992px) {
    gap: 5px;
  }
`

export const LikesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const InfoFrame = styled.div`
  height: 18px;
  display: flex;
  align-items: center;
  opacity: 0.8;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0 5px;
  color: var(--dark);
  background: #d67070d3;
  border-radius: 2px;
  text-transform: capitalize;

  white-space: nowrap;
  @media (max-width: 992px) {
    font-size: 0.6rem;
  }
`

export const RecordTypeFrame = styled(InfoFrame)`
  background-color: #83e6a9a4;
`

export const GenreFrame = styled(InfoFrame)`
  background-color: var(--grey);
  &:hover {
    cursor: pointer;
    color: var(--dark);
    background-color: var(--red);
    /* border: 1px solid var(--dark); */
  }
`

export const InfoTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`

export const TracksInfo = styled.div`
  justify-self: flex-end;
  font-size: 0.9rem;
  font-weight: 500;
  @media (max-width: 576px) {
    font-size: 0.7rem;
  }
`
export const InfoLabel = styled.div`
  width: 60%;
  color: var(--grey);
  font-weight: 500;
`

export const AlbumPrice = styled.div`
  color: var(--grey);
  font-size: 2rem;
  font-weight: 600;
  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`

export const AlbumTracksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border-radius: 5px;
  overflow-y: scroll;
  width: 98%;
  padding: 10px 0;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  width: 100%;
`
