import { styled } from 'styled-components'

export const GenresContainer = styled.div`
  position: sticky;
  top: 50px;
  z-index: 7;
  border-radius: 5px;
  background-color: var(--dark);
  width: 90%;
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 10px;
  height: 90px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--red);
    border-radius: 5px;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const Genre = styled.div`
  display: flex;
  color: var(--white);
  /* flex: 1 auto; */
  white-space: nowrap;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  background-color: var(--blue);
  height: 25px;
  text-transform: capitalize;
  cursor: pointer;
  & p {
    padding: 0 10px;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`

export const GenreImg = styled.img`
  height: 30px;
  border-radius: 5px 0 0 5px;
`
