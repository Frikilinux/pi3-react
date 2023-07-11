import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const PreviewContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  top: 10vh;
  position: fixed;
  width: 100%;
  max-width: 1000px;
  height: 80vh;
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
    top: 70px;
    height: calc(100vh - 70px);
  }
`

export const AlbumHeaders = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 576px) {
    gap: 1px;
  }
`

export const AlbumImg = styled.img`
  border-radius: 5px;
  opacity: 0.8;
  width: 20%;
  min-width: 150px;
  height: auto;
  /* background: #ffffff url(${({ imgsrc }) =>
    `${imgsrc}`}) center/cover no-repeat; */
  @media (max-width: 576px) {
    min-width: 80px
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
  /* align-items: center; */

  width: 70%;
  height: 200px;
  @media (max-width: 576px) {
    /* width: 70%; */
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
    width: 90%;
    font-size: 1.5rem;
  }
`

export const InfoArtist = styled(InfoTitle)`
  font-size: 1.8rem;
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`

export const ExtraInfoContainer = styled.div`
padding-right: 5%;
width: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
gap: 20px;
font-weight: 600;
font-size: 0.8rem;
`

export const ExplicitFrame = styled.div`
  opacity: 0.8;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0 5px;
  color: var(--grey);
  background: var(--dark);
  border: 1px solid yellow;
  /* border-radius: 5px; */
  text-transform: capitalize;
  border: 1px solid var(--grey);
`
export const SingleFrame = styled(ExplicitFrame)`
  right: 40px;
  /* color: #dddddb; */
  /* background: #0546f8; */
`

export const AlbumTracksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border-radius: 5px;
  overflow-y: scroll;
  width: 100%;
  padding: 10px 0;
  height: 100%;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
`
