import { styled } from 'styled-components'

export const TrackContainer = styled.div`
  display: flex;
  font-weight: 500;
  align-items: center;
  gap: 10px;
  padding: 5px;
  background-color: ${({ playing }) => (playing ? '#282e36a0' : '#6b6a6a7d')};
  border-radius: 5px;
  width: 98%;
  font-size: 1rem;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`

export const TrackData = styled.div`
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const TrackNumber = styled.div`
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

export const TrackTitle = styled.div`
  /* width: 100%; */
  color: ${({ playing }) => (playing ? 'green' : 'var(--white)')};
  display: flex;
  /* gap: 10px; */
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

export const TrackArtist = styled(TrackTitle)`
  /* width: 100%; */
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
  color: var(--grey);
  &:hover {
    cursor: pointer;
    color: var(--red);
    cursor: pointer;
  }
`

export const ExplicitTrack = styled.div`
  font-size: 0.6rem;
  color: var(--dark);
  background-color: var(--grey);
  padding: 0px 5px;
  border-radius: 2px;
`
