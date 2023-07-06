import { styled } from 'styled-components'

export const PreviewContainer = styled.div`
  padding: 20px;
  top: 15vh;
  position: fixed;
  width: 70%;
  height: 70vh;
  background-color: #17179c81;
  backdrop-filter: blur(5px);
  z-index: 10;
  border-radius: 15px;
  @media (max-width: 576px) {
    padding: 10px;
    border-radius: 0;
    top: 70px;
    width: 100%;
    height: calc(100vh - 70px);
  }
`

export const AlbumHeaders = styled.div`
display: flex;
align-items: center;
gap: 20px;
  /* height: 200px; */
  background-color: #189ba099;
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
background-color: #e673737d;
width: 100%;
height: 200px;
@media (max-width: 576px) {
  height: 100px;
}
`

export const AlbumTracksContainer = styled.div``
