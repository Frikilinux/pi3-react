import { styled } from 'styled-components'

export const ArtistInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 300px;
  width: 100%;
  max-width: 1300px;
  background: var(--dark);
  /* url(${({ imgsrc }) => `${imgsrc}`}) 0 20% / cover no-repeat; */
`

export const ArtistImg = styled.img``

export const ArtistInfoName = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: var(--grey);
`
