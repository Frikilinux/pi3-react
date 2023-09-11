import { styled } from 'styled-components'

export const ArtistContainer = styled.div`
  padding: 70px 10px 20px 10px;
  width: 100%;
  /* max-width: 1000px; */
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
  width: 65%;
  max-width: 1000px;
  @media (max-width: 576px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

export const ArtistInfo = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media (max-width: 576px) {
    align-items: center;
  }
`
export const ArtistInfoName = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #15072b;
  @media (max-width: 992px) {
    text-align: center;
    font-size: 2rem;
  }
`
export const ArtistFans = styled.div`
  color: var(--dark);
  font-size: 1.2rem;
  font-weight: 500;
  @media (max-width: 992px) {
    font-size: 0.9rem;
  }
`

export const ArtistImg = styled.img`
  cursor: pointer;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  box-shadow:
    0 26px 58px 0 rgba(0, 0, 0, 0.22),
    0 5px 14px 0 rgba(0, 0, 0, 0.18);
  @media (max-width: 576px) {
    width: 200px;
    height: 200px;
    /* height: 20%; */
  }
`

export const ArtistSectionTitle = styled.div`
  width: 95%;
  max-width: 1300px;
  color: var(--grey);
  padding: 20px 0;
  font-size: 1.7rem;
  font-weight: 900;
  & span {
    color: var(--green);
  }
  @media (max-width: 576px) {
    padding: 10px 0;
    text-align: center;
    font-size: 1.2rem;
  }
`
