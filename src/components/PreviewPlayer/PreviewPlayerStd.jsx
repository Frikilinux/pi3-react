import { motion } from 'framer-motion';
import { styled } from 'styled-components'

export const PreviewContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  top: 15vh;
  position: fixed;
  width: 70%;
  height: 70vh;
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
    width: 100%;
    height: calc(100vh - 70px);
  }
`

export const AlbumHeaders = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  /* height: 200px; */
  /* background-color: #189ba099; */
  @media (max-width: 576px) {
    gap: 5px;
    flex-direction: column;
  }
`

export const AlbumImg = styled.img`
  border-radius: 5px;
  opacity: 0.8;
  height: 200px;
  width: auto;
  /* background: #ffffff url(${({ imgsrc }) =>
    `${imgsrc}`}) center/cover no-repeat; */
  @media (max-width: 576px) {
    align-self: flex-start;
    height: 150px;
    /* border-radius: 0; */
  }
`
export const AlbumInfoContainer = styled.div`
  /* background-color: #e673737d; */
  width: 100%;
  height: 200px;
  @media (max-width: 576px) {
    height: 100px;
  }
`

export const ExplicitFrame = styled.div`
  opacity: 0.8;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 6;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0 5px;
  color: yellow;
  background: #f80505;
  border: 1px solid yellow;
  border-radius: 3px;
`
export const SingleFrame = styled(ExplicitFrame)`
  right: 40px;
  color: #dddddb;
  background: #0546f8;
  border: 1px solid white;
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
  height: 40vh;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
`
