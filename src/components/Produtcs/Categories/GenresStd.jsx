import { styled } from 'styled-components'

export const GenresContainer = styled.div`
border-radius: 40px;
width: 80%;
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  flex-flow: column wrap;
  /* flex-wrap: wrap; */
  gap: 10px;
  height: 90px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 10px;
    /* width: 100px; */
    /* background: transparent; */
  }

  &::-webkit-scrollbar-thumb {
    background: var(--red);
    border-radius: 5px;
  }
`
// export const GenresContainer = styled.div`
//   padding: 5px 15px;
//   display: grid;
//   grid-auto-flow: column;
//   grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
//   grid-template-rows: repeat(2, minmax(auto, auto));
//   grid-gap: 10px;
//   height: 100px;
//   overflow-x: auto;
//   flex-shrink: 0;
//   /* grid-auto-columns: minmax(auto,1fr); */
//   `

export const Genre = styled.div`
  display: flex;
  /* flex: 1 auto; */
  white-space: nowrap;
  align-items: center;
  justify-content: space-between;
  /* gap: 10px; */
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  /* padding: 5px 10px; */
  border-radius: 5px;
  background-color: grey;
  height: 30px;
  text-transform: capitalize;
  & p {
    padding: 0 10px;
  }
`

export const GenreImg = styled.img`
  height: 30px;
  border-radius: 5px 0 0 5px;
`
