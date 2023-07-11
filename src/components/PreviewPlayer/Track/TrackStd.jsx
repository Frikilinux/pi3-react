import { styled } from 'styled-components'

export const TrackContainer = styled.div`
  font-weight: 500;
  padding: 5px;
  background-color: #6b6a6a6e;
  border-radius: 5px;
  width: 98%;
  font-size: 1rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border: ${({playing}) => playing ? '3px solid var(--celeste)' : 'none'};
  &:hover {
    cursor: pointer;
  }
`
