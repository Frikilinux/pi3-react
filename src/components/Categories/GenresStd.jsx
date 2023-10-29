import { styled } from 'styled-components'

export const GenresContainer = styled.div`
  width: 100%;
  padding: 5px 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3px;
    align-items: flex-start;
  }
`

export const Genre = styled.div`
  display: flex;
  /* flex: 1 auto; */
  white-space: nowrap;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 5px;
  /* height: 25px; */
  text-transform: capitalize;
  cursor: pointer;
  & p {
    color: ${({ selected }) => selected && 'var(--dark)'};
    background-color: ${({ selected }) => selected && 'var(--green)'};
    border-radius: 3px;
    padding: 2px 10px;
  }
  
  @media (max-width: 992px) {
    font-weight: 500;
    font-size: 1.2rem;
  }
`

export const GenreImg = styled.img`
  height: 30px;
  border-radius: 5px 0 0 5px;
`
