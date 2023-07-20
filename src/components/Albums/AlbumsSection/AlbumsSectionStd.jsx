import { styled } from "styled-components";

export const AlbumsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1300px;
  @media(max-width: 576px){
    width: 100%;
  }
`

export const AlbumsLoadingContainer = styled.div`
display: flex;
justify-content: center;
height: 80px;
width: 100%;
`
