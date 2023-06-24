import { styled } from "styled-components";

export const GenresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`

export const Genre = styled.div`
  display: flex;
  align-items: center;
  /* gap: 10px; */
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  /* padding: 5px 10px; */
  border-radius: 5px;
  background-color: grey;
  text-transform: capitalize;
  & p {
    padding: 0 10px;
  }
`

export const GenreImg = styled.img`
  height: 40px;
  border-radius: 0 5px 5px 0;
`
