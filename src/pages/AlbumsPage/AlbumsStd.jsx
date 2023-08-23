import { styled } from 'styled-components'

const AlbumsTitleType = styled.h1`
font-size: 2.2rem;
width: 80%;
max-width: 1100px;
@media (max-width: 576px) {
  padding: 10px 0;
  font-size: 1.5rem;
      text-align: center;
    }
/* align-self: flex-start; */
`

export { AlbumsTitleType }
