import { styled } from 'styled-components'

export const TrackContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  padding: 5px;
  background-color: #6b6a6a6e;
  border-radius: 5px;
  width: 98%;
  font-size: 1rem;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border: ${({ playing }) => (playing ? '3px solid var(--celeste)' : 'none')};
  &:hover {
    cursor: pointer;
  }
  & p {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`

export const ExplicitTrack = styled.div`
  background-color: var(--grey);
  padding: 1px 5px;
  border-radius: 2px;
`
