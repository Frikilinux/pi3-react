import { styled } from 'styled-components'

export const ArtistContainer = styled.div`
  padding: 30px;
  width: 90%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`

export const ArtistInfoContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  /* height: 200px; */
  width: 75%;
  max-width: 1300px;
  background: var(--dark);
  @media (max-width: 576px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`
export const ArtistFans = styled.div`
  color: var(--grey);
  font-size: 0.8rem;
  font-weight: 500;
`

export const ArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 576px) {
    align-items: center;
  }
`
export const ArtistInfoName = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: var(--grey);
  @media (max-width: 992px) {
    font-size: 2rem;
  }
`

export const ArtistImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  @media (max-width: 576px) {
    /* height: 20%; */
  }
`
