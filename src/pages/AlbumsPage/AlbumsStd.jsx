import { styled } from 'styled-components'

const AlbumsSearchContainer = styled.div`
  padding: 100px 10px 20px 10px;
`

const AlbumsSearchTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
`

const AlbumsTitleType = styled.h2`
padding-top: 30px;
font-size: 2.2rem;
width: 80%;
max-width: 1100px;
& span {
  color: var(--green);
}
@media (max-width: 576px) {
  padding: 10px 0;
  font-size: 1.5rem;
      text-align: center;
    }
/* align-self: flex-start; */
`

export { AlbumsTitleType, AlbumsSearchContainer, AlbumsSearchTitle }
